import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: "sd-input",
    styleUrl: "sd-input.scss",
    shadow: true,
})
export class SdInput {
    /**
     * The display label for the input
     */
    @Prop() label: string;

    /**
     * The type for the input box. Defaults to `text`
     */
    @Prop() type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";

    /**
     * A predefined value for the input. Defaults to an empty string (` `)
     */
    @Prop() value?: string;

    /**
     * The placeholder value for the input field
     */
    @Prop() placeholder?: string;

    /**
     * Whether or not the input is required. Defaults to `false`
     */
    @Prop() required?: boolean;

    /**
     * A validation regex for the input. Will show a checkmark next to the input when validated
     */
    @Prop() pattern?: string;

    /**
     * The input mode to use for virtual keyboards
     */
    @Prop() inputmode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";

    @Event() inputUpdate: EventEmitter<string>;

    inputUpdateHandler = (ev: InputEvent) => {
        this.inputUpdate.emit((ev.target as HTMLInputElement).value);
    }

    render() {
        return (
            <Host>
                <div class="label">{this.label}</div>
                <input class="value" type={this.type} value={this.value} required={this.required} onChange={this.inputUpdateHandler} />
            </Host>
        );
    }
}
