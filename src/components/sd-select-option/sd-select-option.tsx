import { Component, Host, h } from "@stencil/core";

@Component({
    tag: "sd-select-option",
    styleUrl: "sd-select-option.scss",
    shadow: true,
})
export class SdSelectOption {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
