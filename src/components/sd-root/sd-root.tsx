import { Component, Host, h } from "@stencil/core";

@Component({
    tag: "sd-root",
    styleUrl: "sd-root.scss",
    shadow: true
})
export class SdRoot {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
