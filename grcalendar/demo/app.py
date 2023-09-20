
import gradio as gr
from grcalendar import GrCalendar
from datetime import datetime

with gr.Blocks() as demo:
    gr.Markdown("""
        # 🗓️ GrCalendar Demo!            
    """)
    with gr.Row():
        with gr.Column():
            date_format = gr.Radio(choices=["date", "datetime"], label="Date format")
            date = GrCalendar()
        with gr.Column():
            is_weekend = gr.Checkbox(label="Is it a weekend?")
    date.change(lambda s: s.weekday() >=5 , date, is_weekend)
    date_format.input(lambda s: GrCalendar(type=s), [date_format], [date])

    

demo.launch()
