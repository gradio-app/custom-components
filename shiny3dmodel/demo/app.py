
import gradio as gr
from shiny3dmodel import shiny3dmodel
import os

model_file = os.path.join(os.path.dirname(__file__), "Duck.glb")


with gr.Blocks() as demo:
    shiny3dmodel(interactive=True, value=model_file)

demo.launch()
