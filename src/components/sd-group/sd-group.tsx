import { Component, Host, h, Prop } from "@stencil/core";

@Component({
    tag: "sd-group",
    styleUrl: "sd-group.scss",
    shadow: true,
})
export class SdGroup {
    /**
     * The display label for the button group
     */
    @Prop({ reflect: true }) label: string = "";

    render() {
        return (
            <Host>
                <sd-label text={this.label}></sd-label>
                <slot></slot>
            </Host>
        );
    }
}
