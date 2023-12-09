
import gradio as gr
from gradio_calendar import Calendar


example = Calendar().example_inputs()

# demo = gr.Interface(
#     lambda x:x,
#     Calendar(),  # interactive version of your component
#     Calendar(),  # static version of your component
#     # examples=[[example]],  # uncomment this line to view the "example version" of your component
# )
def my_fn(date, datetime):
    return date, datetime
with gr.Blocks() as demo : 
    gr.Markdown("""
        # 🗓️ Calendar Demo!
    """)
    with gr.Row():
        date = Calendar(type="date", label="Date")
        out_date = Calendar(type="date")
    with gr.Row():
        datetime = Calendar(type="datetime-local",label="datetime-local")
        out_datetime = Calendar(type="datetime-local")
    submit = gr.Button("Submit")
    submit.click(my_fn, [date, datetime], [out_date, out_datetime])




demo.launch()
