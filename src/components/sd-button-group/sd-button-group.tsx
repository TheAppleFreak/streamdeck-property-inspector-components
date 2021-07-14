import { Component, Host, h, Prop } from "@stencil/core";

@Component({
    tag: "sd-button-group",
    styleUrl: "sd-button-group.scss",
    shadow: true,
})
export class SdButtonGroup {
    /**
     * The display label for the button group
     */
    @Prop({reflect: true}) label: string = "";

    render() {
        return (
            <Host>
                <sd-label text={this.label}></sd-label>
                <slot></slot>
            </Host>
        );
    }
}
