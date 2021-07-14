import { Component, Host, h, Prop } from "@stencil/core";

@Component({
    tag: "sd-label",
    styleUrl: "sd-label.scss",
    shadow: true,
})
export class SdLabel {
    /**
     * The text to show in the label
     */
    @Prop({reflect: true}) text: string = "";

    /**
     * Whether the textarea should have a -20px top margin. Used for alignment with other elements
     */
    @Prop({reflect: true}) countOffset: boolean = false;

    render() {
        return (
            <Host 
                style={{
                    marginTop: this.countOffset ? "-20px": undefined,
                    content: this.text.trim().length === 0 ? "" : undefined
                }}
            >
                {this.text.trim()}
            </Host>
        );
    }
}
