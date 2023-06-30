import { Component, Host, h, Prop } from "@stencil/core";

@Component({
    tag: "sd-checkbox-group",
    styleUrl: "sd-checkbox-group.scss",
    shadow: true,
})
export class SdCheckboxGroup {
    /**
     * The display label for the button group
     */
    @Prop({ reflect: true }) label: string = "";

    render() {
        return (
            <Host>
                <sd-label text={this.label}></sd-label>
                <div class="container">
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
