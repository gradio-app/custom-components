
import gradio as gr
from gradio_chattychatbot import ChattyChatbot

example = ChattyChatbot().example_inputs()

with gr.Blocks() as demo:
    gr.Markdown("# 🤖 Chatty Chatbot Demo")
    ChattyChatbot(value=example, avatar_images={
        "user": "https://fastly.picsum.photos/id/965/200/300.jpg?hmac=16gh0rrQrvUF3RJa52nRdq8hylkBd-pL4Ff9kqsNRDQ",
        "assistant": "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
        "assistant2": "https://fastly.picsum.photos/id/0/458/354.jpg?hmac=-ZTflGf5tVmiNxYEef0_ZELrtcoKwxGVmCa00bOOFZU"
        })
    

demo.launch()
