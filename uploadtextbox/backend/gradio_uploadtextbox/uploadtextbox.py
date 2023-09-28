"""gr.UploadTextbox() component."""

from __future__ import annotations

import warnings
import tempfile
from typing import Any, Callable, Literal
from pathlib import Path
from gradio_client import utils as client_utils

from gradio_client.documentation import document, set_documentation_group
from gradio import utils

from gradio.components.base import (
    FormComponent,
    _Keywords,
)
from gradio.events import Events

set_documentation_group("component")


@document()
class UploadTextbox(FormComponent):
    """
    Creates a textarea for user to enter string input or display string output.
    Preprocessing: passes textarea value as a {str} into the function.
    Postprocessing: expects a {str} returned from function and sets textarea value to it.
    Examples-format: a {str} representing the textbox input.

    Demos: hello_world, diff_texts, sentence_builder
    Guides: creating-a-chatbot, real-time-speech-recognition
    """

    EVENTS = [Events.change, Events.input, Events.select, Events.submit, Events.focus, Events.upload, Events.click]

    def __init__(
        self,
        value: dict[str, str | list[str]] | Callable | None = None,
        *,
        lines: int = 1,
        max_lines: int = 20,
        placeholder: str | None = None,
        label: str | None = None,
        info: str | None = None,
        every: float | None = None,
        show_label: bool | None = None,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        interactive: bool | None = True,
        visible: bool = True,
        elem_id: str | None = None,
        autofocus: bool = False,
        elem_classes: list[str] | str | None = None,
        type: Literal["file", "bytes"] = "file",
        text_align: Literal["left", "right"] | None = None,
        rtl: bool = False,
        show_copy_button: bool = False,
        file_count: Literal["single", "multiple", "directory"] = "single",
        file_types: list[str] | None = None,
        **kwargs,
    ):
        """
        Parameters:
            value: default text to provide in textarea. If callable, the function will be called whenever the app loads to set the initial value of the component.
            lines: minimum number of line rows to provide in textarea.
            max_lines: maximum number of line rows to provide in textarea.
            placeholder: placeholder hint to provide behind textarea.
            label: component name in interface.
            info: additional component description.
            every: If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
            show_label: if True, will display label.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            interactive: if True, will be rendered as an editable textbox; if False, editing will be disabled. If not provided, this is inferred based on whether the component is used as an input or output.
            visible: If False, component will be hidden.
            autofocus: If True, will focus on the textbox when the page loads.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            type: The type of textbox. One of: 'text', 'password', 'email', Default is 'text'.
            text_align: How to align the text in the textbox, can be: "left", "right", or None (default). If None, the alignment is left if `rtl` is False, or right if `rtl` is True. Can only be changed if `type` is "text".
            rtl: If True and `type` is "text", sets the direction of the text to right-to-left (cursor appears on the left of the text). Default is False, which renders cursor on the right.
            show_copy_button: If True, includes a copy button to copy the text in the textbox. Only applies if show_label is True.
            autoscroll: If True, will automatically scroll to the bottom of the textbox when the value changes.
        """
        self.lines = lines
        self.max_lines = max(lines, max_lines)
        self.placeholder = placeholder
        self.show_copy_button = show_copy_button
        self.autofocus = autofocus
        self.file_count = file_count
        if file_count == "directory" and file_types is not None:
            warnings.warn(
                "The `file_types` parameter is ignored when `file_count` is 'directory'."
            )
        if file_types is not None and not isinstance(file_types, list):
            raise ValueError(
                f"Parameter file_types must be a list. Received {file_types.__class__.__name__}"
            )
        self.file_types = file_types
        """
        Event listener for when the user selects text in the Textbox.
        Uses event data gradio.SelectData to carry `value` referring to selected substring, and `index` tuple referring to selected range endpoints.
        See EventData documentation on how to use this event data.
        """
        super().__init__(
            label=label,
            info=info,
            every=every,
            show_label=show_label,
            container=container,
            scale=scale,
            min_width=min_width,
            interactive=interactive,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            value=value,
            **kwargs,
        )
        self.type = type
        self.rtl = rtl
        self.text_align = text_align

    @staticmethod
    def update(
        value: dict[str, str | list[str]]
        | Literal[_Keywords.NO_VALUE]
        | None = _Keywords.NO_VALUE,
        lines: int | None = None,
        max_lines: int | None = None,
        placeholder: str | None = None,
        label: str | None = None,
        info: str | None = None,
        show_label: bool | None = None,
        container: bool | None = None,
        scale: int | None = None,
        min_width: int | None = None,
        visible: bool | None = None,
        interactive: bool | None = None,
        text_align: Literal["left", "right"] | None = None,
        rtl: bool | None = None,
        show_copy_button: bool | None = None,
        autofocus: bool | None = None,
    ):
        warnings.warn(
            "Using the update method is deprecated. Simply return a new object instead, e.g. `return gr.UploadTextbox(...)` instead of `return gr.UploadTextbox.update(...)`."
        )
        return {
            "lines": lines,
            "max_lines": max_lines,
            "placeholder": placeholder,
            "label": label,
            "info": info,
            "show_label": show_label,
            "container": container,
            "scale": scale,
            "min_width": min_width,
            "visible": visible,
            "value": value,
            "interactive": interactive,
            "show_copy_button": show_copy_button,
            "autofocus": autofocus,
            "text_align": text_align,
            "rtl": rtl,
            "__type__": "update",
        }

    def preprocess(
        self, x: dict[str, str | list[dict[str, Any]]] | None
    ) -> (
        dict[
            str,
            str
            | bytes
            | tempfile._TemporaryFileWrapper
            | list[bytes | tempfile._TemporaryFileWrapper]
            | None,
        ]
        | None
    ):
        """
        Preprocesses input (converts it to a string) before passing it to the function.
        Parameters:
            x: text
        Returns:
            text
        """
        if x is None:
            return None

        def process_single_file(f) -> bytes | tempfile._TemporaryFileWrapper:
            file_name, data, is_file = (
                f["name"],
                f["data"],
                f.get("is_file", False),
            )
            if self.type == "file":
                if is_file:
                    path = self.make_temp_copy_if_needed(file_name)
                else:
                    data, _ = client_utils.decode_base64_to_binary(data)
                    path = self.file_bytes_to_file(
                        data, dir=self.DEFAULT_TEMP_DIR, file_name=file_name
                    )
                    path = str(utils.abspath(path))
                    self.temp_files.add(path)
                file = tempfile.NamedTemporaryFile(
                    delete=False, dir=self.DEFAULT_TEMP_DIR
                )
                file.name = path
                file.orig_name = file_name  # type: ignore
                return file
            elif self.type == "bytes":
                if is_file:
                    with open(file_name, "rb") as file_data:
                        return file_data.read()
                return client_utils.decode_base64_to_binary(data)[0]
            else:
                raise ValueError(
                    "Unknown type: "
                    + str(self.type)
                    + ". Please choose from: 'file', 'bytes'."
                )

        if not x["files"] or x["files"] is None and x:
            value = {"text": x["text"], "files": None}
        else:
            value = {
                "text": x["text"],
                "files": [process_single_file(f) for f in x["files"]],
            }
        return value


    def postprocess(
        self, y: dict[str, str | list[str]] | None
    ) -> dict[str, Any] | list[dict[str, Any]] | None:
        """
        Parameters:
            y: dict with key "text" for text and "files" for list of files
        Returns:
            Text and a list of JSON object with key 'name' for filename, 'data' for base64 url, and 'size' for filesize in bytes
        """
        if y is None or y == {}:
            return {"text": None, "files": []}
        elif not y["files"]:
            return {"text": y["text"], "files": []}
        else:
            files = [
                {
                    "orig_name": Path(file).name,
                    "name": self.make_temp_copy_if_needed(file),
                    "size": Path(file).stat().st_size,
                    "data": None,
                    "is_file": True,
                }
                for file in y["files"]
            ]
            return {"text": y["text"], "files": files}

    def api_info(self) -> dict[str, Any]:
        return {"type": "string"}

    def example_inputs(self) -> Any:
        return {"text": "Hello!!", "files": None}
