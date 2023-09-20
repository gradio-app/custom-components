<svelte:options accessors={true} />

<script lang="ts">
	import type { Gradio } from "@gradio/utils";
	import { createEventDispatcher } from "svelte";

	import TextBox from "../shared";
	import { Block } from "@gradio/atoms";
	import { StatusTracker } from "@gradio/statustracker";
	import type { LoadingStatus } from "@gradio/statustracker";
	const dispatch = createEventDispatcher<{
		change: string;
		input: never;
	}>();

	export let gradio: Gradio<{
		change: string;
		input: never;
	}> = { dispatch, i18n: (s: string) => s };

	export let label = "Calendar";
	export let type: "date" | "datetime-local" = "date";
	export let elem_id = "";
	export let elem_classes: string[] = [];
	export let visible = true;
	export let value = "";
	export let show_label: boolean;
	export let container = true;
	export let scale: number | null = null;
	export let min_width: number | undefined = undefined;
	export let loading_status: LoadingStatus | undefined = undefined;
	export let value_is_output = false;
</script>

<Block
	{visible}
	{elem_id}
	{elem_classes}
	{scale}
	{min_width}
	allow_overflow={false}
	padding={container}
>
	{#if loading_status}
		<StatusTracker
			autoscroll={gradio.autoscroll}
			i18n={gradio.i18n}
			{...loading_status}
		/>
	{/if}

	<TextBox
		bind:value
		bind:value_is_output
		{label}
		{show_label}
		{container}
		{type}
		on:change={() => gradio.dispatch("change", value)}
		on:input={() => gradio.dispatch("input")}
	/>
</Block>
