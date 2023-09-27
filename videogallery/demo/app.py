
import gradio as gr
from gradio_videogallery import VideoGallery


example = VideoGallery().example_inputs()

with gr.Blocks() as demo:
    VideoGallery(value=example, interactive=False)
 

demo.launch()
