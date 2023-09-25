import type { FileData } from "@gradio/upload";
import BABYLON from "babylonjs";

const light_types = {
  DirectionalLight: BABYLON.DirectionalLight,
  PointLight: BABYLON.PointLight,
  HemiLight: BABYLON.HemisphericLight,
};

const create_camera = (
  scene: BABYLON.Scene,
  camera_position: [number | null, number | null, number | null],
  zoom_speed: number
): void => {
  scene.createDefaultCamera(true, true, true);
  var helperCamera = scene.activeCamera! as BABYLON.ArcRotateCamera;
  if (camera_position[0] !== null) {
    helperCamera.alpha = BABYLON.Tools.ToRadians(camera_position[0]);
  }
  if (camera_position[1] !== null) {
    helperCamera.beta = BABYLON.Tools.ToRadians(camera_position[1]);
  }
  if (camera_position[2] !== null) {
    helperCamera.radius = camera_position[2];
  }
  // Disable panning. Adapted from: https://playground.babylonjs.com/#4U6TVQ#3
  helperCamera.panningSensibility = 0;
  helperCamera.attachControl(false, false, -1);
  helperCamera.pinchToPanMaxDistance = 0;
  helperCamera.wheelPrecision = 2500 / zoom_speed;
};

export const add_new_model = (
  canvas: HTMLCanvasElement,
  scene: BABYLON.Scene,
  engine: BABYLON.Engine,
  value: FileData | null,
  clear_color: [number, number, number, number],
  camera_position: [number | null, number | null, number | null],
  zoom_speed: number,
  lights?: { type: string; position: [number, number, number] }[] | null,
  show_axes?: boolean
): BABYLON.Scene => {
  if (scene && !scene.isDisposed && engine) {
    scene.dispose();
    engine.dispose();
  }

  engine = new BABYLON.Engine(canvas, true);
  scene = new BABYLON.Scene(engine);
  scene.createDefaultCameraOrLight();
  scene.clearColor = scene.clearColor = new BABYLON.Color4(...clear_color);

  if (lights) {
    lights.forEach((light) => {
      const newLight = new light_types[light.type](
        light.type,
        new BABYLON.Vector3(...light.position),
        scene
      );
      scene.addLight(newLight);
    });

    if (show_axes) {
      const axes = new BABYLON.Debug.AxesViewer(scene, 5);
    }
  }

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener("resize", () => {
    engine.resize();
  });

  if (!value) return scene;
  let url: string;
  if (value.is_file) {
    url = value.data;
  } else {
    let base64_model_content = value.data;
    let raw_content = BABYLON.DecodeBase64UrlToBinary(base64_model_content);
    let blob = new Blob([raw_content]);
    url = URL.createObjectURL(blob);
  }
  BABYLON.SceneLoader.ShowLoadingScreen = false;
  BABYLON.SceneLoader.Append(
    url,
    "",
    scene,
    () => create_camera(scene, camera_position, zoom_speed),
    undefined,
    undefined,
    "." + value.name.split(".")[1]
  );
  return scene;
};

export const change_camera_position = (
  scene: BABYLON.Scene,
  camera_position: [number | null, number | null, number | null],
  zoom_speed: number
): void => {
  var helperCamera = scene.activeCamera! as BABYLON.ArcRotateCamera;
  if (camera_position[0] !== null) {
    helperCamera.alpha = BABYLON.Tools.ToRadians(camera_position[0]);
  }
  if (camera_position[1] !== null) {
    helperCamera.beta = BABYLON.Tools.ToRadians(camera_position[1]);
  }
  if (camera_position[2] !== null) {
    helperCamera.radius = camera_position[2];
  }
  helperCamera.wheelPrecision = 2500 / zoom_speed;
};

export const change_light = (
  scene: BABYLON.Scene,
  light_type: string,
  light_position: [number, number, number],
  index: number
): void => {
  var light = scene.lights[index];
  light.dispose();

  switch (light_type) {
    case light_type:
      light = new light_types[light_type](
        light_type,
        new BABYLON.Vector3(...light_position),
        scene
      );
      break;
  }

  scene.addLight(light);
};

export const add_new_light = (
  scene: BABYLON.Scene,
  light_position: [number, number, number]
): void => {
  const newLight = new BABYLON.HemisphericLight(
    "HemiLight",
    new BABYLON.Vector3(...light_position),
    scene
  );
  scene.addLight(newLight);
};

export const change_show_axes = (
  scene: BABYLON.Scene,
  show_axes: boolean
): void => {
  if (show_axes) {
    const axes = new BABYLON.Debug.AxesViewer(scene, 5);
  }
};

export const zoom = (
  inOrOut: "in" | "out",
  scene: BABYLON.Scene,
  zoom_speed: number
): void => {
  var helperCamera = scene.activeCamera! as BABYLON.ArcRotateCamera;
  helperCamera.wheelPrecision = 2500 / zoom_speed;

  if (inOrOut === "in") {
    helperCamera.radius = helperCamera.radius / 2;
  } else {
    helperCamera.radius = helperCamera.radius * 2;
  }
};

export const reset_camera_position = (
  scene: BABYLON.Scene,
  camera_position: [number | null, number | null, number | null],
  zoom_speed: number
): void => {
  scene.removeCamera(scene.activeCamera!);
  create_camera(scene, camera_position, zoom_speed);
};
