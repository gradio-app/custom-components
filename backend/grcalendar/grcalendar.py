"""gr.Textbox() component."""

from __future__ import annotations

import warnings
from typing import Any, Callable, Literal
import datetime

from gradio_client.documentation import document, set_documentation_group

from gradio.components.base import (
    FormComponent,
    _Keywords,
)
from gradio.events import Events

set_documentation_group("component")


@document()
class GrCalendar(FormComponent):
    """
    Creates a textarea for user to enter string input or display string output.
    Preprocessing: passes textarea value as a {str} into the function.
    Postprocessing: expects a {str} returned from function and sets textarea value to it.
    Examples-format: a {str} representing the textbox input.

    Demos: hello_world, diff_texts, sentence_builder
    Guides: creating-a-chatbot, real-time-speech-recognition
    """

    EVENTS = [Events.change, Events.input]

    def __init__(
        self,
        value: datetime.datetime | Callable | None = None,
        *,
        type: Literal["date", "datetime-local"] = "date",
        label: str | None = None,
        every: float | None = None,
        show_label: bool | None = None,
        container: bool = True,
        interactive: bool | None = None,
        visible: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        **kwargs,
    ):
        """
        Parameters:
            value: default text to provide in textarea. If callable, the function will be called whenever the app loads to set the initial value of the component.
            label: component name in interface.
            info: additional component description.
            every: If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
            show_label: if True, will display label.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            interactive: if True, will be rendered as an editable textbox; if False, editing will be disabled. If not provided, this is inferred based on whether the component is used as an input or output.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
        """

        super().__init__(
            label=label,
            every=every,
            show_label=show_label,
            container=container,
            interactive=interactive,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            value=value,
            scale=scale,
            min_width=min_width,
            **kwargs,
        )
        self.type = type
        self._format_str = "%Y-%m-%d" if self.type == 'date' else "%Y-%m-%dT%H:%M"



    @staticmethod
    def update(
        value: datetime.datetime | Literal[_Keywords.NO_VALUE] | None = _Keywords.NO_VALUE,
        label: str | None = None,
        type: Literal["date", "datetime-local"] | None = None,
        info: str | None = None,
        show_label: bool | None = None,
        container: bool | None = None,
        scale: int | None = None,
        min_width: int | None = None,
        visible: bool | None = None,
        interactive: bool | None = None,
    ):
        warnings.warn(
            "Using the update method is deprecated. Simply return a new object instead, e.g. `return gr.Textbox(...)` instead of `return gr.Textbox.update(...)`."
        )
        return {
            "label": label,
            "info": info,
            "type": type,
            "show_label": show_label,
            "container": container,
            "min_width": min_width,
            "visible": visible,
            "value": value,
            "scale": scale,
            "type": type,
            "interactive": interactive,
            "__type__": "update",
        }

    def preprocess(self, x: str | None) -> str | None:
        """
        Preprocesses input (converts it to a string) before passing it to the function.
        Parameters:
            x: text
        Returns:
            text
        """
        return None if x is None else datetime.datetime.strptime(x, self._format_str)

    def postprocess(self, y: str | None) -> str | None:
        """
        Postproccess the function output y by converting it to a str before passing it to the frontend.
        Parameters:
            y: function output to postprocess.
        Returns:
            text
        """
        return None if y is None else datetime.datetime.strftime(y, self._format_str)

    def api_info(self) -> dict[str, Any]:
        return {"type": "string", "description": f"A string formatted as {self._format_str}"}

    def example_inputs(self) -> Any:
        return "2023-09-20"
