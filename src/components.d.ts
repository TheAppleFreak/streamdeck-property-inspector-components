/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { OptGroup, Option } from "./components/sd-select/sd-select";
export namespace Components {
    interface SdButton {
        /**
          * Whether the button should be disabled
         */
        "disabled": boolean;
        /**
          * Whether the button should fill up all available space available to it
         */
        "fill": boolean;
        /**
          * Whether to include the label in the rendered HTML. Useful when used in a button group
         */
        "includeLabel": boolean;
        /**
          * The display label for the button
         */
        "label": string;
        /**
          * The name attribute for the button
         */
        "name": string;
        /**
          * Whether to include margin on the side of each button. Used in button groups
         */
        "sideMargin": boolean;
        /**
          * The name attribute for the button. Defaults to `button`
         */
        "type": "button" | "reset" | "submit";
        /**
          * The text to be displayed on the button
         */
        "value": string;
    }
    interface SdButtonGroup {
        /**
          * The display label for the button group
         */
        "label": string;
    }
    interface SdCanvas {
        /**
          * Returns a reference to the canvas element
         */
        "getCanvas": () => Promise<HTMLCanvasElement>;
        /**
          * The height of the canvas. Defaults to `144`
         */
        "height": number;
        /**
          * The display label for the canvas
         */
        "label": string;
        /**
          * The width of the canvas. Defaults to `144`
         */
        "width": number;
    }
    interface SdDetails {
        /**
          * Closes the details element. Has no effect if the element is already closed
          * @returns Returns the new state of the element (true = open, false = closed)
         */
        "close": () => Promise<boolean>;
        /**
          * Whether to include the label in the rendered HTML
         */
        "includeLabel": boolean;
        /**
          * Whether the text should have margins on the text elements
         */
        "innerMargins": boolean;
        /**
          * The display label for the details element
         */
        "label": string;
        /**
          * Opens the details element. Has no effect if the element is already open
          * @returns Returns the new state of the element (true = open, false = closed)
         */
        "open": () => Promise<boolean>;
        /**
          * Whether the details element should initially be open (`true`) or closed (`false`). Defaults to `false`
         */
        "opened": boolean;
        /**
          * The summary message for the details element
         */
        "summary": string;
        /**
          * Toggles the open state of the details element, closing it if it is open and opening it if it is closed
          * @returns Returns the new state of the element (true = open, false = closed)
         */
        "toggle": () => Promise<boolean>;
    }
    interface SdHeader {
    }
    interface SdInput {
        /**
          * The hover text for the form entry
         */
        "altText": string;
        /**
          * The autocomplete type for the select element. Values taken from here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
         */
        "autocomplete": "off" |
                                "on" |
                                "name" |
                                "honorific-prefix" |
                                "given-name" |
                                "additional-name" |
                                "family-name" |
                                "honorific-suffix" |
                                "nickname" |
                                "email" |
                                "username" |
                                "new-password" |
                                "current-password" |
                                "one-time-code" |
                                "organization-title" |
                                "organization" |
                                "street-address" |
                                "address-line1" |
                                "address-line2" |
                                "address-line3" |
                                "address-level4" |
                                "address-level3" |
                                "address-level2" |
                                "address-level1" |
                                "country" |
                                "country-name" |
                                "postal-code" |
                                "cc-name" |
                                "cc-given-name" |
                                "cc-additional-name" |
                                "cc-family-name" | 
                                "cc-number" | 
                                "cc-exp" | 
                                "cc-exp-month" | 
                                "cc-exp-year" | 
                                "cc-csc" | 
                                "cc-type" |
                                "transaction-currency" | 
                                "transaction-amount" |
                                "language" |
                                "bday" |
                                "bday-day" | 
                                "bday-month" | 
                                "bday-year" | 
                                "sex" | 
                                "tel" | 
                                "tel-country-code" |
                                "tel-national" | 
                                "tel-area-code" | 
                                "tel-local" |
                                "tel-extension" | 
                                "impp" | 
                                "url" |
                                "photo";
        /**
          * Whether the input should be disabled. Defaults to `false`
         */
        "disabled": boolean;
        /**
          * The input mode to use for virtual keyboards
         */
        "inputmode"?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The display label for the input
         */
        "label": string;
        /**
          * A validation regex for the input. Will show a checkmark next to the input when validated
         */
        "pattern"?: string;
        /**
          * The placeholder value for the input field
         */
        "placeholder"?: string;
        /**
          * Whether the input should be read only. Defaults to `false`
         */
        "readonly": boolean;
        /**
          * Whether or not the input is required. Defaults to `false`
         */
        "required"?: boolean;
        /**
          * The type for the input box. Defaults to `text`
         */
        "type"?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
        /**
          * A predefined value for the input
         */
        "value": string;
    }
    interface SdLabel {
        /**
          * Whether the textarea should have a -20px top margin. Used for alignment with other elements
         */
        "countOffset": boolean;
        /**
          * The text to show in the label
         */
        "text": string;
    }
    interface SdRoot {
    }
    interface SdSelect {
        /**
          * The autocomplete type for the select element. Values taken from here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
         */
        "autocomplete": "off" |
                                "on" |
                                "name" |
                                "honorific-prefix" |
                                "given-name" |
                                "additional-name" |
                                "family-name" |
                                "honorific-suffix" |
                                "nickname" |
                                "email" |
                                "username" |
                                "new-password" |
                                "current-password" |
                                "one-time-code" |
                                "organization-title" |
                                "organization" |
                                "street-address" |
                                "address-line1" |
                                "address-line2" |
                                "address-line3" |
                                "address-level4" |
                                "address-level3" |
                                "address-level2" |
                                "address-level1" |
                                "country" |
                                "country-name" |
                                "postal-code" |
                                "cc-name" |
                                "cc-given-name" |
                                "cc-additional-name" |
                                "cc-family-name" | 
                                "cc-number" | 
                                "cc-exp" | 
                                "cc-exp-month" | 
                                "cc-exp-year" | 
                                "cc-csc" | 
                                "cc-type" |
                                "transaction-currency" | 
                                "transaction-amount" |
                                "language" |
                                "bday" |
                                "bday-day" | 
                                "bday-month" | 
                                "bday-year" | 
                                "sex" | 
                                "tel" | 
                                "tel-country-code" |
                                "tel-national" | 
                                "tel-area-code" | 
                                "tel-local" |
                                "tel-extension" | 
                                "impp" | 
                                "url" |
                                "photo";
        /**
          * Whether the select should be automatically focused on load
         */
        "autofocus": boolean;
        /**
          * Whether the select should be disabled
         */
        "disabled": boolean;
        /**
          * Whether the select should fill up all available space available to it
         */
        "fill": boolean;
        /**
          * Whether to include the label in the rendered HTML. Useful when used in a button group
         */
        "includeLabel": boolean;
        /**
          * The display label for the select element
         */
        "label": string;
        /**
          * Whether the select should allow for multiple selections
         */
        "multiple": boolean;
        /**
          * The name attribute for the select control
         */
        "name": string;
        /**
          * The select options. Can be set by passing in a JSON string or by setting the property through JavaScript.
         */
        "options": string |
        Array<Option | OptGroup>;
        /**
          * Whether the select should be required
         */
        "required": boolean;
        /**
          * Whether to include margin on the side of each button. Used in button groups
         */
        "sideMargin": boolean;
        /**
          * The number of rows that should be visible at one time.
         */
        "size": number;
    }
    interface SdTextarea {
        /**
          * Whether the textarea should be disabled. Defaults to `false`
         */
        "disabled": boolean;
        /**
          * The display label for the textarea
         */
        "label": string;
        /**
          * The maximum length of the content of the textarea
         */
        "maxlength": number;
        /**
          * The minimum length of the content of the textarea
         */
        "minlength": number;
        /**
          * The name of the textarea
         */
        "name"?: string;
        /**
          * The placeholder value for the input field
         */
        "placeholder"?: string;
        /**
          * Whether the textarea should be read only. Defaults to `false`
         */
        "readonly": boolean;
        /**
          * Whether or not the textarea is required. Defaults to `false`
         */
        "required": boolean;
        /**
          * A predefined value for the textarea
         */
        "value": string;
    }
}
declare global {
    interface HTMLSdButtonElement extends Components.SdButton, HTMLStencilElement {
    }
    var HTMLSdButtonElement: {
        prototype: HTMLSdButtonElement;
        new (): HTMLSdButtonElement;
    };
    interface HTMLSdButtonGroupElement extends Components.SdButtonGroup, HTMLStencilElement {
    }
    var HTMLSdButtonGroupElement: {
        prototype: HTMLSdButtonGroupElement;
        new (): HTMLSdButtonGroupElement;
    };
    interface HTMLSdCanvasElement extends Components.SdCanvas, HTMLStencilElement {
    }
    var HTMLSdCanvasElement: {
        prototype: HTMLSdCanvasElement;
        new (): HTMLSdCanvasElement;
    };
    interface HTMLSdDetailsElement extends Components.SdDetails, HTMLStencilElement {
    }
    var HTMLSdDetailsElement: {
        prototype: HTMLSdDetailsElement;
        new (): HTMLSdDetailsElement;
    };
    interface HTMLSdHeaderElement extends Components.SdHeader, HTMLStencilElement {
    }
    var HTMLSdHeaderElement: {
        prototype: HTMLSdHeaderElement;
        new (): HTMLSdHeaderElement;
    };
    interface HTMLSdInputElement extends Components.SdInput, HTMLStencilElement {
    }
    var HTMLSdInputElement: {
        prototype: HTMLSdInputElement;
        new (): HTMLSdInputElement;
    };
    interface HTMLSdLabelElement extends Components.SdLabel, HTMLStencilElement {
    }
    var HTMLSdLabelElement: {
        prototype: HTMLSdLabelElement;
        new (): HTMLSdLabelElement;
    };
    interface HTMLSdRootElement extends Components.SdRoot, HTMLStencilElement {
    }
    var HTMLSdRootElement: {
        prototype: HTMLSdRootElement;
        new (): HTMLSdRootElement;
    };
    interface HTMLSdSelectElement extends Components.SdSelect, HTMLStencilElement {
    }
    var HTMLSdSelectElement: {
        prototype: HTMLSdSelectElement;
        new (): HTMLSdSelectElement;
    };
    interface HTMLSdTextareaElement extends Components.SdTextarea, HTMLStencilElement {
    }
    var HTMLSdTextareaElement: {
        prototype: HTMLSdTextareaElement;
        new (): HTMLSdTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "sd-button": HTMLSdButtonElement;
        "sd-button-group": HTMLSdButtonGroupElement;
        "sd-canvas": HTMLSdCanvasElement;
        "sd-details": HTMLSdDetailsElement;
        "sd-header": HTMLSdHeaderElement;
        "sd-input": HTMLSdInputElement;
        "sd-label": HTMLSdLabelElement;
        "sd-root": HTMLSdRootElement;
        "sd-select": HTMLSdSelectElement;
        "sd-textarea": HTMLSdTextareaElement;
    }
}
declare namespace LocalJSX {
    interface SdButton {
        /**
          * Whether the button should be disabled
         */
        "disabled"?: boolean;
        /**
          * Whether the button should fill up all available space available to it
         */
        "fill"?: boolean;
        /**
          * Whether to include the label in the rendered HTML. Useful when used in a button group
         */
        "includeLabel"?: boolean;
        /**
          * The display label for the button
         */
        "label"?: string;
        /**
          * The name attribute for the button
         */
        "name"?: string;
        /**
          * Emits a `clicked` event whenever the button is clicked
         */
        "onClicked"?: (event: CustomEvent<MouseEvent>) => void;
        /**
          * Whether to include margin on the side of each button. Used in button groups
         */
        "sideMargin"?: boolean;
        /**
          * The name attribute for the button. Defaults to `button`
         */
        "type"?: "button" | "reset" | "submit";
        /**
          * The text to be displayed on the button
         */
        "value"?: string;
    }
    interface SdButtonGroup {
        /**
          * The display label for the button group
         */
        "label"?: string;
    }
    interface SdCanvas {
        /**
          * The height of the canvas. Defaults to `144`
         */
        "height"?: number;
        /**
          * The display label for the canvas
         */
        "label"?: string;
        /**
          * The width of the canvas. Defaults to `144`
         */
        "width"?: number;
    }
    interface SdDetails {
        /**
          * Whether to include the label in the rendered HTML
         */
        "includeLabel"?: boolean;
        /**
          * Whether the text should have margins on the text elements
         */
        "innerMargins"?: boolean;
        /**
          * The display label for the details element
         */
        "label"?: string;
        /**
          * Emits an `openChanged` event whenever the details element is opened (true = open, false = closed)
         */
        "onOpenChanged"?: (event: CustomEvent<boolean>) => void;
        /**
          * Whether the details element should initially be open (`true`) or closed (`false`). Defaults to `false`
         */
        "opened"?: boolean;
        /**
          * The summary message for the details element
         */
        "summary"?: string;
    }
    interface SdHeader {
    }
    interface SdInput {
        /**
          * The hover text for the form entry
         */
        "altText"?: string;
        /**
          * The autocomplete type for the select element. Values taken from here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
         */
        "autocomplete"?: "off" |
                                "on" |
                                "name" |
                                "honorific-prefix" |
                                "given-name" |
                                "additional-name" |
                                "family-name" |
                                "honorific-suffix" |
                                "nickname" |
                                "email" |
                                "username" |
                                "new-password" |
                                "current-password" |
                                "one-time-code" |
                                "organization-title" |
                                "organization" |
                                "street-address" |
                                "address-line1" |
                                "address-line2" |
                                "address-line3" |
                                "address-level4" |
                                "address-level3" |
                                "address-level2" |
                                "address-level1" |
                                "country" |
                                "country-name" |
                                "postal-code" |
                                "cc-name" |
                                "cc-given-name" |
                                "cc-additional-name" |
                                "cc-family-name" | 
                                "cc-number" | 
                                "cc-exp" | 
                                "cc-exp-month" | 
                                "cc-exp-year" | 
                                "cc-csc" | 
                                "cc-type" |
                                "transaction-currency" | 
                                "transaction-amount" |
                                "language" |
                                "bday" |
                                "bday-day" | 
                                "bday-month" | 
                                "bday-year" | 
                                "sex" | 
                                "tel" | 
                                "tel-country-code" |
                                "tel-national" | 
                                "tel-area-code" | 
                                "tel-local" |
                                "tel-extension" | 
                                "impp" | 
                                "url" |
                                "photo";
        /**
          * Whether the input should be disabled. Defaults to `false`
         */
        "disabled"?: boolean;
        /**
          * The input mode to use for virtual keyboards
         */
        "inputmode"?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The display label for the input
         */
        "label"?: string;
        /**
          * Emits a `changeUpdate` event whenever the input is changed. Fires after the input loses focus
         */
        "onChangeUpdate"?: (event: CustomEvent<string>) => void;
        /**
          * Emits a `inputUpdate` event whenever the input is changed. Fires every time something is typed into the input
         */
        "onInputUpdate"?: (event: CustomEvent<{data: string | null, inputType: string}>) => void;
        /**
          * A validation regex for the input. Will show a checkmark next to the input when validated
         */
        "pattern"?: string;
        /**
          * The placeholder value for the input field
         */
        "placeholder"?: string;
        /**
          * Whether the input should be read only. Defaults to `false`
         */
        "readonly"?: boolean;
        /**
          * Whether or not the input is required. Defaults to `false`
         */
        "required"?: boolean;
        /**
          * The type for the input box. Defaults to `text`
         */
        "type"?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
        /**
          * A predefined value for the input
         */
        "value"?: string;
    }
    interface SdLabel {
        /**
          * Whether the textarea should have a -20px top margin. Used for alignment with other elements
         */
        "countOffset"?: boolean;
        /**
          * The text to show in the label
         */
        "text"?: string;
    }
    interface SdRoot {
    }
    interface SdSelect {
        /**
          * The autocomplete type for the select element. Values taken from here: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
         */
        "autocomplete"?: "off" |
                                "on" |
                                "name" |
                                "honorific-prefix" |
                                "given-name" |
                                "additional-name" |
                                "family-name" |
                                "honorific-suffix" |
                                "nickname" |
                                "email" |
                                "username" |
                                "new-password" |
                                "current-password" |
                                "one-time-code" |
                                "organization-title" |
                                "organization" |
                                "street-address" |
                                "address-line1" |
                                "address-line2" |
                                "address-line3" |
                                "address-level4" |
                                "address-level3" |
                                "address-level2" |
                                "address-level1" |
                                "country" |
                                "country-name" |
                                "postal-code" |
                                "cc-name" |
                                "cc-given-name" |
                                "cc-additional-name" |
                                "cc-family-name" | 
                                "cc-number" | 
                                "cc-exp" | 
                                "cc-exp-month" | 
                                "cc-exp-year" | 
                                "cc-csc" | 
                                "cc-type" |
                                "transaction-currency" | 
                                "transaction-amount" |
                                "language" |
                                "bday" |
                                "bday-day" | 
                                "bday-month" | 
                                "bday-year" | 
                                "sex" | 
                                "tel" | 
                                "tel-country-code" |
                                "tel-national" | 
                                "tel-area-code" | 
                                "tel-local" |
                                "tel-extension" | 
                                "impp" | 
                                "url" |
                                "photo";
        /**
          * Whether the select should be automatically focused on load
         */
        "autofocus"?: boolean;
        /**
          * Whether the select should be disabled
         */
        "disabled"?: boolean;
        /**
          * Whether the select should fill up all available space available to it
         */
        "fill"?: boolean;
        /**
          * Whether to include the label in the rendered HTML. Useful when used in a button group
         */
        "includeLabel"?: boolean;
        /**
          * The display label for the select element
         */
        "label"?: string;
        /**
          * Whether the select should allow for multiple selections
         */
        "multiple"?: boolean;
        /**
          * The name attribute for the select control
         */
        "name"?: string;
        /**
          * Emits a `changed` event whenever the value of the select is explicitly changed and committed by the user
         */
        "onChangeUpdate"?: (event: CustomEvent<InputEvent>) => void;
        /**
          * Emits an `input` event whenever the value of the select is changed by the user
         */
        "onInputUpdate"?: (event: CustomEvent<InputEvent>) => void;
        /**
          * The select options. Can be set by passing in a JSON string or by setting the property through JavaScript.
         */
        "options"?: string |
        Array<Option | OptGroup>;
        /**
          * Whether the select should be required
         */
        "required"?: boolean;
        /**
          * Whether to include margin on the side of each button. Used in button groups
         */
        "sideMargin"?: boolean;
        /**
          * The number of rows that should be visible at one time.
         */
        "size"?: number;
    }
    interface SdTextarea {
        /**
          * Whether the textarea should be disabled. Defaults to `false`
         */
        "disabled"?: boolean;
        /**
          * The display label for the textarea
         */
        "label"?: string;
        /**
          * The maximum length of the content of the textarea
         */
        "maxlength"?: number;
        /**
          * The minimum length of the content of the textarea
         */
        "minlength"?: number;
        /**
          * The name of the textarea
         */
        "name"?: string;
        /**
          * Emits a `changeUpdate` event whenever the textarea is changed. Fires after the textarea loses focus
         */
        "onChangeUpdate"?: (event: CustomEvent<InputEvent>) => void;
        /**
          * Emits a `inputUpdate` event whenever the textarea is changed. Fires every time something is typed into the textarea
         */
        "onInputUpdate"?: (event: CustomEvent<InputEvent>) => void;
        /**
          * The placeholder value for the input field
         */
        "placeholder"?: string;
        /**
          * Whether the textarea should be read only. Defaults to `false`
         */
        "readonly"?: boolean;
        /**
          * Whether or not the textarea is required. Defaults to `false`
         */
        "required"?: boolean;
        /**
          * A predefined value for the textarea
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "sd-button": SdButton;
        "sd-button-group": SdButtonGroup;
        "sd-canvas": SdCanvas;
        "sd-details": SdDetails;
        "sd-header": SdHeader;
        "sd-input": SdInput;
        "sd-label": SdLabel;
        "sd-root": SdRoot;
        "sd-select": SdSelect;
        "sd-textarea": SdTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sd-button": LocalJSX.SdButton & JSXBase.HTMLAttributes<HTMLSdButtonElement>;
            "sd-button-group": LocalJSX.SdButtonGroup & JSXBase.HTMLAttributes<HTMLSdButtonGroupElement>;
            "sd-canvas": LocalJSX.SdCanvas & JSXBase.HTMLAttributes<HTMLSdCanvasElement>;
            "sd-details": LocalJSX.SdDetails & JSXBase.HTMLAttributes<HTMLSdDetailsElement>;
            "sd-header": LocalJSX.SdHeader & JSXBase.HTMLAttributes<HTMLSdHeaderElement>;
            "sd-input": LocalJSX.SdInput & JSXBase.HTMLAttributes<HTMLSdInputElement>;
            "sd-label": LocalJSX.SdLabel & JSXBase.HTMLAttributes<HTMLSdLabelElement>;
            "sd-root": LocalJSX.SdRoot & JSXBase.HTMLAttributes<HTMLSdRootElement>;
            "sd-select": LocalJSX.SdSelect & JSXBase.HTMLAttributes<HTMLSdSelectElement>;
            "sd-textarea": LocalJSX.SdTextarea & JSXBase.HTMLAttributes<HTMLSdTextareaElement>;
        }
    }
}
