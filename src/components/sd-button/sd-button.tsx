import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: "sd-button",
    styleUrl: "sd-button.scss",
    shadow: true,
})
export class SdButton {
    /**
     * Whether to include the label in the rendered HTML. Useful when used in a button group
     */
    @Prop() public includeLabel: boolean = true;

    /**
     * The display label for the button
     */
    @Prop({ reflect: true }) public label: string = "";

    /**
     * The text to be displayed on the button
     */
    @Prop({ reflect: true }) public value: string = "";

    /**
     * Whether the button should fill up all available space available to it
     */
    @Prop({ reflect: true }) public fill: boolean = true;

    /**
     * Whether the button should be disabled
     */
    @Prop({ reflect: true }) public disabled: boolean = false;

    /**
     * The name attribute for the button
     */
    @Prop({ reflect: true }) public name: string = "";

    /**
     * The name attribute for the button. Defaults to `button`
     */
    @Prop({ reflect: true }) public type: "button" | "reset" | "submit" = "button";

    /**
     * Whether to include margin on the side of each button. Used in button groups
     */
    @Prop({ reflect: true }) public sideMargin: boolean = true;

    /**
     * Emits a `clicked` event whenever the button is clicked
     */
    @Event() clicked: EventEmitter<MouseEvent>;
    clickHandler = (ev: MouseEvent) => {
        this.clicked.emit(ev);
    }

    render() {
        return (
            <Host>
                {
                    this.includeLabel
                        ? <sd-label text={this.label}></sd-label>
                        : undefined
                }
                <button
                    class={{
                        "value": true,
                        "small-button": !this.fill,
                        "no-side-margin": !this.sideMargin
                    }}
                    onClick={this.clickHandler}
                    name={this.name}
                    disabled={this.disabled}
                    type={this.type}
                    value={this.value}
                ><slot>{this.value}</slot></button>
            </Host>
        );
    }
}
