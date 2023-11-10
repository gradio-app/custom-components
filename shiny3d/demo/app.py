
import gradio as gr
from gradio_shiny3d import shiny3D
import os

model_file = os.path.join(os.path.dirname(__file__), "Duck.glb")

with gr.Blocks() as demo:
    shiny3D(interactive=True, value=model_file)

demo.launch()
