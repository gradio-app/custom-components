
import time

import gradio as gr
from richtextbox import RichTextbox

string = ", it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of light, it was the season of darkness, it was the spring of hope, it was the winter of despair"

def autocomplete(text):
    for i in range(len(string)):
        time.sleep(0.02)
        yield text + '[color=green]' + string[:i+1] + '[/color]'

demo = gr.Interface(
    autocomplete,
    gr.Textbox(),
    RichTextbox(),
    title="Streaming Demo"
).queue()

demo.launch()
