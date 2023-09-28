
import gradio as gr
from gradio_uploadtextbox import UploadTextbox


example = UploadTextbox().example_inputs()

with gr.Blocks() as demo:
    UploadTextbox(value=example, interactive=True, file_count="multiple")
    UploadTextbox(value=example, interactive=False)
 

demo.launch()
