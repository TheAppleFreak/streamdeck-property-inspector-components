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
    @Prop({ reflect: true }) label: string;

    /**
     * The hover text for the form entry
     */
    @Prop({ reflect: true }) altText: string;

    /**
     * Whether the input should be read only. Defaults to `false`
     */
    @Prop({ reflect: true }) readonly: boolean = false;

    /**
     * Whether the input should be disabled. Defaults to `false`
     */
    @Prop({ reflect: true }) disabled: boolean = false;

    /**
     * The type for the input box. Defaults to `text`
     */
    @Prop() type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";

    /**
     * A predefined value for the input
     */
    @Prop({ reflect: true, mutable: true }) value: string;

    /**
     * The placeholder value for the input field
     */
    @Prop({ reflect: true }) placeholder?: string;

    /**
     * Whether or not the input is required. Defaults to `false`
     */
    @Prop() required?: boolean = false;

    /**
     * A validation regex for the input. Will show a checkmark next to the input when validated
     */
    @Prop({ reflect: true }) pattern?: string;

    /**
     * The input mode to use for virtual keyboards
     */
    @Prop({ reflect: true }) inputmode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";

    /**
     * The autocomplete type for the select element. Values taken from here:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    @Prop({ reflect: true }) autocomplete:
        "off" |
        "on" |
        "name" |
        "honorific-prefix" |
        "given-name" |
        "additional-name" |
        "family-name" |
        "honorific-suffix" |
        "nickname" |
        "email" |
        "username" |
        "new-password" |
        "current-password" |
        "one-time-code" |
        "organization-title" |
        "organization" |
        "street-address" |
        "address-line1" |
        "address-line2" |
        "address-line3" |
        "address-level4" |
        "address-level3" |
        "address-level2" |
        "address-level1" |
        "country" |
        "country-name" |
        "postal-code" |
        "cc-name" |
        "cc-given-name" |
        "cc-additional-name" |
        "cc-family-name" |
        "cc-number" |
        "cc-exp" |
        "cc-exp-month" |
        "cc-exp-year" |
        "cc-csc" |
        "cc-type" |
        "transaction-currency" |
        "transaction-amount" |
        "language" |
        "bday" |
        "bday-day" |
        "bday-month" |
        "bday-year" |
        "sex" |
        "tel" |
        "tel-country-code" |
        "tel-national" |
        "tel-area-code" |
        "tel-local" |
        "tel-extension" |
        "impp" |
        "url" |
        "photo"
        = "off";

    /**
     * Emits a `changeUpdate` event whenever the input is changed. Fires after the input loses focus
     */
    @Event() changeUpdate: EventEmitter<string>;
    changeUpdateHandler = (ev: InputEvent) => {
        this.changeUpdate.emit((ev.target as HTMLInputElement).value);
    }

    /**
     * Emits a `inputUpdate` event whenever the input is changed. Fires every time something is typed into the input
     */
    @Event() inputUpdate: EventEmitter<{ data: string | null, inputType: string }>;
    inputUpdateHandler = (ev: InputEvent) => {
        this.value = (ev.target as HTMLInputElement).value;
        this.inputUpdate.emit({
            data: ev.data,
            inputType: ev.inputType
        });
    }

    render() {
        return (
            <Host title={this.altText}>
                <sd-label text={this.label}></sd-label>
                <input class="value"
                    type={this.type}
                    value={this.value}
                    required={this.required}
                    placeholder={this.placeholder}
                    readonly={this.readonly}
                    disabled={this.disabled}
                    pattern={this.pattern}
                    onChange={this.changeUpdateHandler}
                    onInput={this.inputUpdateHandler}
                >
                </input>
            </Host>
        );
    }
}
