<script lang="ts">
  import type { FileData } from "@gradio/upload";
  import { BlockLabel, IconButton } from "@gradio/atoms";
  import { File, Download, Undo } from "@gradio/icons";
  import Plus from "../icons/Plus.svelte";
  import Minus from "../icons/Minus.svelte";

  import {
    add_new_light,
    add_new_model,
    change_camera_position,
    change_light,
    change_show_axes,
    reset_camera_position,
    zoom,
  } from "../shared/utils";
  import { onMount } from "svelte";
  import BABYLON from "babylonjs";
  import BABYLON_LOADERS from "babylonjs-loaders";

  const light_list = ["HemiLight", "pointLight", "DirectionLight"];

  export let value: FileData | null;
  export let clear_color: [number, number, number, number] = [0, 0, 0, 0];
  export let label = "";
  export let show_label: boolean;
  export let zoom_speed = 1;
  export let show_axes = false;

  export let lights: { type: string; position: [number, number, number] }[] = [
    {
      type: "HemiLight",
      position: [0, 1, 0],
    },
  ];

  let visible_submenu: null | string = null;

  const label_dict = {
    1: "X",
    2: "Y",
    3: "Z",
  };

  // alpha, beta, radius
  export let camera_position: [number | null, number | null, number | null] = [
    null,
    null,
    null,
  ];

  BABYLON_LOADERS.OBJFileLoader.IMPORT_VERTEX_COLORS = true;

  let canvas: HTMLCanvasElement;
  let scene: BABYLON.Scene;
  let engine: BABYLON.Engine | null;
  let mounted = false;

  onMount(() => {
    engine = new BABYLON.Engine(canvas, true);
    window.addEventListener("resize", () => {
      engine?.resize();
    });
    mounted = true;
  });

  $: ({ data, name } = value || {
    data: undefined,
    name: undefined,
  });

  $: canvas && mounted && data != null && name && dispose();

  function dispose(): void {
    if (scene && !scene.isDisposed) {
      scene.dispose();
      engine?.stopRenderLoop();
      engine?.dispose();
      engine = null;
      engine = new BABYLON.Engine(canvas, true);
      window.addEventListener("resize", () => {
        engine?.resize();
      });
    }
    if (engine !== null) {
      scene = add_new_model(
        canvas,
        scene,
        engine,
        value,
        clear_color,
        camera_position,
        zoom_speed,
        lights,
        show_axes
      );
    }
  }

  function handle_undo(): void {
    reset_camera_position(scene, camera_position, zoom_speed);
  }
</script>

<BlockLabel {show_label} Icon={File} {label} />
{#if value}
  <div class="model3D">
    <div class="buttons">
      <IconButton
        Icon={Plus}
        label={"Zoom In"}
        on:click={() => zoom("in", scene, zoom_speed)}
      />

      <IconButton
        Icon={Minus}
        label={"Zoom Out"}
        on:click={() => zoom("out", scene, zoom_speed)}
      />

      <IconButton Icon={Undo} label="Undo" on:click={() => handle_undo()} />
      <a href={value.data} target={null} download={value.name}>
        <IconButton Icon={Download} label={"Download"} />
      </a>
    </div>

    <canvas bind:this={canvas} />

    <div class="light-menu">
      <span class="input-container">
        <div class="input-wrapper-axes">
          <label for="axes">Show Axes</label>
          <input
            type="checkbox"
            bind:checked={show_axes}
            on:change={() => {
              if (show_axes) {
                change_show_axes(scene, show_axes);
              } else {
                dispose();
              }
            }}
          />
        </div>
      </span>

      <button
        class="input-title"
        aria-label="Toggle open camera submenu"
        on:click={() => {
          if (visible_submenu === "camera") {
            visible_submenu = null;
          } else {
            visible_submenu = "camera";
          }
        }}
        ><span
          class="caret"
          style:transform={visible_submenu === "camera"
            ? "rotateZ(180deg)"
            : "rotateZ(90deg)"}
        /> Camera Position</button
      >

      {#if visible_submenu === "camera"}
        <span class="input-wrapper">
          {#each camera_position as camera_value, index}
            <span class="input-container">
              <label for="position">Axis {label_dict[index + 1]} </label>
              <input
                type="number"
                class={`position-${index}`}
                min="0"
                max="999"
                step="5"
                placeholder="0"
                bind:value={camera_value}
                on:change={() =>
                  change_camera_position(scene, camera_position, zoom_speed)}
              />
            </span>
          {/each}
        </span>
      {/if}

      <button
        aria-label="Toggle open light submenu"
        class="input-title"
        on:click={() => {
          if (visible_submenu === "light") {
            visible_submenu = null;
          } else {
            visible_submenu = "light";
          }
        }}
        ><span
          class="caret"
          style:transform={visible_submenu === "light"
            ? "rotateZ(180deg)"
            : "rotateZ(90deg)"}
        /> Light Position</button
      >
      {#if visible_submenu === "light"}
        {#each lights as light, index}
          <span>
            <label for="light">Light Type</label>
            <select
              class="light-dropdown"
              name="light"
              bind:value={light.type}
              on:change={(e) => {
                change_light(
                  scene,
                  e.currentTarget.value,
                  light.position,
                  index
                );
              }}
            >
              {#each light_list as light_type}
                <option value={light_type}>{light_type}</option>
              {/each}
            </select>
          </span>
          <span class="input-wrapper">
            {#each light.position as light_value, index}
              <span class="input-container">
                <label for="light">Axis {label_dict[index + 1]} </label>
                <input
                  type="number"
                  class={`light-${index}`}
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="0"
                  bind:value={light_value}
                  on:change={() =>
                    change_light(scene, light.type, light.position, index)}
                />
              </span>
            {/each}
          </span>
          <div class="separator" />
        {/each}

        <button
          class="add"
          disabled={lights.length >= 5}
          on:click={() => {
            if (lights.length < 5) {
              lights = [...lights, { type: "HemiLight", position: [0, 1, 0] }];
              add_new_light(scene, [0, 1, 0]);
            }
          }}>Add Light</button
        >
      {/if}
    </div>
  </div>
{/if}

<style>
  .separator {
    border-bottom: 1px solid var(--border-color-primary);
    margin: 10px 0;
    width: 100%;
  }
  .add {
    border: var(--button-border-width) solid
      var(--button-secondary-border-color);
    background: var(--button-secondary-background-fill);
    color: var(--button-secondary-text-color);
    margin: 5px 0;
  }

  .add:disabled {
    background-color: var(--button-secondary-background-fill-disabled);
    cursor: not-allowed;
    opacity: 0.5;
    filter: grayscale(30%);
  }
  .input-container {
    display: flex;
    flex-direction: column;
  }

  .light-dropdown {
    all: unset;
    border: var(--button-border-width) solid
      var(--button-secondary-border-color);
    background: var(--button-secondary-background-fill);
    color: var(--button-secondary-text-color);
    margin: 5px 0;
    width: min-content;
    height: min-content;
    font-size: var(--text-md);
    padding: 5px;
    position: relative;
    text-align: left;
  }

  .input-wrapper {
    display: flex;
    flex-direction: row;
  }

  .caret {
    display: inline-flex;
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;
    border-bottom: solid 5px #fff;
    transform: rotateZ(90deg);
    top: -2px;
    position: relative;
  }

  .input-wrapper input[type="number"] {
    width: min-content;
    height: min-content;
    display: inline-block;
    background: var(--input-background-fill);
    border: 1px solid var(--input-border-color);
    padding: 0 5px;
    color: var(--body-text-color);
    margin: 0 2px;
  }

  .input-title {
    color: white;
    margin: 5px 0;
    text-align: right;
  }

  .input-wrapper-axes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .input-wrapper-axes input[type="checkbox"] {
    background-color: var(--checkbox-background-color);
  }

  input[type="checkbox"]:checked {
    background-color: var(--checkbox-background-color);
    border: 1px solid var(--checkbox-border-color-selected);
  }

  .light-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    text-align: right;
    bottom: 0;
    right: 0;
    margin: 10px;
    min-width: 200px;
    color: black;
    background-color: rgba(11, 15, 25, 0.6);
    border: 1px solid var(--border-color-primary);
    border-radius: var(--table-radius);
    padding: 15px;
    max-height: 90%;
    overflow-y: scroll;
  }

  .light-menu label {
    font-size: 12px;
    margin-right: 5px;
    color: white;
    font: var(--font);
    width: 100%;
    padding: 5px;
  }

  .model3D {
    display: flex;
    position: relative;
    width: var(--size-full);
    height: var(--size-full);
  }
  canvas {
    width: var(--size-full);
    height: var(--size-full);
    object-fit: contain;
    overflow: hidden;
  }
  .buttons {
    display: flex;
    position: absolute;
    top: var(--size-2);
    right: var(--size-2);
    justify-content: flex-end;
    gap: var(--spacing-sm);
    z-index: var(--layer-5);
  }
</style>
