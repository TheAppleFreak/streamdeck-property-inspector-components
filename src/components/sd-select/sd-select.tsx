import { Component, Host, h } from "@stencil/core";

@Component({
    tag: "sd-select",
    styleUrl: "sd-select.scss",
    shadow: true,
})
export class SdSelect {

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
