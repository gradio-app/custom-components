
import gradio as gr
from gradio_videogallery import videogallery


example = videogallery().example_inputs()

with gr.Blocks() as demo:
    with gr.Row():
        videogallery(value=example, label="Populated"),  # populated component

demo.launch()
