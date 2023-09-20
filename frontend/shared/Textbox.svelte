<script lang="ts">
	import {
		beforeUpdate,
		afterUpdate,
		createEventDispatcher,
		tick
	} from "svelte";
	import { BlockTitle } from "@gradio/atoms";

	import type { SelectData } from "@gradio/utils";

	export let type: "date" | "datetime-local" = "date";
	export let value = new Date().toISOString().split('T')[0];
	export let value_is_output = false;
	export let label: string;
	export let disabled = false;
	export let show_label = true;
	export let container = true;

	$: if (value === null) value = new Date().toISOString().split('T')[0];

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
 
	$: value, handle_change();


</script>

<!-- svelte-ignore a11y-autofocus -->
<label class:container>
	<BlockTitle {show_label}>{label}</BlockTitle>
	{#if type === "date"}
		<input type="date" bind:value={value} on:change={handle_change} {disabled}/>
	{:else}
		<input type="datetime-local" bind:value={value} on:change={handle_change} {disabled}/>
	{/if}
</label>

<style>
	label {
		display: block;
		width: 100%;
	}

	input {
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
	label:not(.container),
	label:not(.container) > input {
		height: 100%;
	}
	.container > input{
		border: var(--input-border-width) solid var(--input-border-color);
		border-radius: var(--input-radius);
	}
	input:disabled {
		-webkit-text-fill-color: var(--body-text-color);
		-webkit-opacity: 1;
		opacity: 1;
	}

	input:focus {
		box-shadow: var(--input-shadow-focus);
		border-color: var(--input-border-color-focus);
	}

	input::placeholder {
		color: var(--input-placeholder-color);
	}

</style>
