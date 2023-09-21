<script lang="ts">
	import {
		afterUpdate,
		createEventDispatcher,
		tick
	} from "svelte";
	import { BlockTitle } from "@gradio/atoms";
	import { Copy, Check } from "@gradio/icons";
	import { fade } from "svelte/transition";
	import type { SelectData } from "@gradio/utils";
	import {bbcodeParser} from "./utils";

	export let value = "";
	export let value_is_output = false;
	export let lines = 1;
	export let label: string;
	export let info: string | undefined = undefined;
	export let disabled = false;
	export let show_label = true;
	export let container = true;
	export let show_copy_button = false;
	export let rtl = false;
	export let text_align: "left" | "right" | undefined = undefined;

	let el: HTMLDivElement;
	let copied = false;
	let timer: NodeJS.Timeout;
	let is_being_edited = false;
	let _value = "";

	$: if (value === null) value = "";
	$: {
		_value = bbcodeParser.bbcodeToHtml(value);
	}

	const dispatch = createEventDispatcher<{
		change: string;
		submit: undefined;
		blur: undefined;
		select: SelectData;
		input: undefined;
		focus: undefined;
	}>();

	function handle_change(): void {
		dispatch("change", value);
		if (!value_is_output) {
			dispatch("input");
		}
	}
	afterUpdate(() => {
		value_is_output = false;
	});
	$: value, handle_change();

	async function handle_copy(): Promise<void> {
		if ("clipboard" in navigator) {
			await navigator.clipboard.writeText(value);
			copy_feedback();
		}
	}

	function copy_feedback(): void {
		copied = true;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			copied = false;
		}, 1000);
	}

	function handle_select(event: Event): void {
		const target: HTMLTextAreaElement | HTMLInputElement = event.target as
			| HTMLTextAreaElement
			| HTMLInputElement;
		const text = target.value;
		const index: [number, number] = [
			target.selectionStart as number,
			target.selectionEnd as number
		];
		dispatch("select", { value: text.substring(...index), index: index });
	}

	async function handle_blur(): Promise<void> {
		await tick();
		if (disabled) {
			return;
		}
		value = el.innerText
		is_being_edited = false;
		el.innerText = "";
		dispatch("blur");
	}

	async function handle_focus(): Promise<void> {
		await tick();
		if (disabled) {
			el.blur();
			return;
		}
		is_being_edited = true;
		dispatch("focus");
	}

	async function handle_keypress(e: KeyboardEvent): Promise<void> {
		await tick();
		if (e.key === "Enter" && e.shiftKey && lines > 1) {
			el.blur();
			e.preventDefault();
			dispatch("submit");
		} else if (
			e.key === "Enter" &&
			!e.shiftKey &&
			lines === 1
		) {
			el.blur();
			e.preventDefault();
			dispatch("submit");
		}
	}
</script>

<label class:container>
	<BlockTitle {show_label} {info}>{label}</BlockTitle>

		{#if show_label && show_copy_button}
			{#if copied}
				<button in:fade={{ duration: 300 }}><Check /></button>
			{:else}
				<button on:click={handle_copy} class="copy-text"><Copy /></button>
			{/if}
		{/if}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		
		<div
			data-testid="textbox"
			contenteditable=true
			class="text-container"
			class:disabled={disabled}
			dir={rtl ? "rtl" : "ltr"}
			bind:this={el}
			on:keypress={handle_keypress}
			on:blur={handle_blur}
			on:select={handle_select}
			on:focus={handle_focus}
			style={text_align ? "text-align: " + text_align : ""}
		>
		{#if is_being_edited}
			{value}
		{:else}
			{@html _value}
		{/if}
		</div>
</label>

<style>
	label {
		display: block;
		width: 100%;
	}

	div.text-container {
		display: block;
		position: relative;
		outline: none !important;
		box-shadow: var(--input-shadow);
		background: var(--input-background-fill);
		padding: var(--input-padding);
		width: 100%;
		color: var(--body-text-color);
		font-weight: var(--input-text-weight);
		font-size: var(--input-text-size);
		line-height: var(--line-sm);
		border: none;
	}
	label:not(.container) {
		height: 100%;
	}
	.container > div.text-container
	{
		border: var(--input-border-width) solid var(--input-border-color);
		border-radius: var(--input-radius);
	}
	div.text-container:disabled
	{
		-webkit-text-fill-color: var(--body-text-color);
		-webkit-opacity: 1;
		opacity: 1;
	}

	div.text-container:focus {
		box-shadow: var(--input-shadow-focus);
		border-color: var(--input-border-color-focus);
	}

	button {
		display: flex;
		position: absolute;
		top: var(--block-label-margin);
		right: var(--block-label-margin);
		align-items: center;
		box-shadow: var(--shadow-drop);
		border: 1px solid var(--color-border-primary);
		border-top: none;
		border-right: none;
		border-radius: var(--block-label-right-radius);
		background: var(--block-label-background-fill);
		padding: 5px;
		width: 22px;
		height: 22px;
		overflow: hidden;
		color: var(--block-label-color);
		font: var(--font-sans);
		font-size: var(--button-small-text-size);
	}
</style>
