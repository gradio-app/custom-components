
import gradio as gr
from gradio_calendar import Calendar


example = Calendar().example_inputs()

demo = gr.Interface(
    lambda x:x,
    Calendar(),  # interactive version of your component
    Calendar(),  # static version of your component
    # examples=[[example]],  # uncomment this line to view the "example version" of your component
)


demo.launch()
