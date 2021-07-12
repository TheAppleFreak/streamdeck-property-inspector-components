/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SdInput {
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
          * Whether or not the input is required. Defaults to `false`
         */
        "required"?: boolean;
        /**
          * The type for the input box. Defaults to `text`
         */
        "type"?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
        /**
          * A predefined value for the input. Defaults to an empty string (` `)
         */
        "value"?: string;
    }
    interface SdRoot {
    }
}
declare global {
    interface HTMLSdInputElement extends Components.SdInput, HTMLStencilElement {
    }
    var HTMLSdInputElement: {
        prototype: HTMLSdInputElement;
        new (): HTMLSdInputElement;
    };
    interface HTMLSdRootElement extends Components.SdRoot, HTMLStencilElement {
    }
    var HTMLSdRootElement: {
        prototype: HTMLSdRootElement;
        new (): HTMLSdRootElement;
    };
    interface HTMLElementTagNameMap {
        "sd-input": HTMLSdInputElement;
        "sd-root": HTMLSdRootElement;
    }
}
declare namespace LocalJSX {
    interface SdInput {
        /**
          * The input mode to use for virtual keyboards
         */
        "inputmode"?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The display label for the input
         */
        "label"?: string;
        "onInputUpdate"?: (event: CustomEvent<string>) => void;
        /**
          * A validation regex for the input. Will show a checkmark next to the input when validated
         */
        "pattern"?: string;
        /**
          * The placeholder value for the input field
         */
        "placeholder"?: string;
        /**
          * Whether or not the input is required. Defaults to `false`
         */
        "required"?: boolean;
        /**
          * The type for the input box. Defaults to `text`
         */
        "type"?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
        /**
          * A predefined value for the input. Defaults to an empty string (` `)
         */
        "value"?: string;
    }
    interface SdRoot {
    }
    interface IntrinsicElements {
        "sd-input": SdInput;
        "sd-root": SdRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sd-input": LocalJSX.SdInput & JSXBase.HTMLAttributes<HTMLSdInputElement>;
            "sd-root": LocalJSX.SdRoot & JSXBase.HTMLAttributes<HTMLSdRootElement>;
        }
    }
}