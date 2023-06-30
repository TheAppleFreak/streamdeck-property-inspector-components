import { Component, Host, h, Prop, Event, EventEmitter, State, Watch } from "@stencil/core";

@Component({
    tag: "sd-select",
    styleUrl: "sd-select.scss",
    shadow: true,
})

export class SdSelect {
    private generatedId: string = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);

    @State() internalOptions: Array<Option | OptGroup>;
    @State() selectValue: string;

    /**
     * Whether to include the label in the rendered HTML. Useful when used in a button group
     */
    @Prop() includeLabel: boolean = true;

    /**
     * The display label for the select element
     */
    @Prop({ reflect: true }) label: string = "";

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
     * Whether the select should be automatically focused on load
     */
    @Prop() autofocus: boolean = false;

    /**
     * Whether the select should be disabled
     */
    @Prop({ reflect: true }) disabled: boolean = false;

    /**
     * Whether the select should fill up all available space available to it
     */
    @Prop({ reflect: true }) fill: boolean = true;

    /**
     * Whether the select should allow for multiple selections
     */
    @Prop({ reflect: true }) multiple: boolean = false;

    /**
     * The name attribute for the select control
     */
    @Prop({ reflect: true }) name: string = "";

    /**
     * The select options. Can be set by passing in a JSON string or by setting the property through JavaScript.
     */
    @Prop({ reflect: true }) options:
        string |
        Array<Option | OptGroup> = [];

    @Watch("options")
    parseOptions() {
        if (typeof this.options === "string") {
            this.internalOptions = JSON.parse(this.options);
        } else if (typeof this.options === "object") {
            this.internalOptions = this.options;
        }
    }

    /**
     * Whether the select should be required
     */
    @Prop({ reflect: true }) required: boolean = false;

    /**
     * The number of rows that should be visible at one time. 
     */
    @Prop({ reflect: true }) size: number;

    /**
     * Whether to include margin on the side of each button. Used in button groups
     */
    @Prop({ reflect: true }) sideMargin: boolean = true;

    /**
     * Emits a `changed` event whenever the value of the select is explicitly changed and committed by the user
     */
    @Event() changeUpdate: EventEmitter<InputEvent>;
    changeUpdateHandler = (_ev: InputEvent) => {
        this.changeUpdate.emit(_ev);
    }

    /**
     * Emits an `input` event whenever the value of the select is changed by the user
     */
    @Event() inputUpdate: EventEmitter<InputEvent>;
    inputUpdateHandler = (_ev: InputEvent) => {
        this.inputUpdate.emit(_ev);
    }

    componentWillLoad() {
        this.parseOptions();
    }

    generateOption(option: Option) {
        return (
            <option
                label={option.label}
                disabled={option.disabled}
                selected={option.selected}
                value={option.value}
            >
                {option.text}
            </option>
        )
    }

    generateOptGroup(optgroup: OptGroup) {
        return (
            <optgroup
                label={optgroup.label}
                disabled={optgroup.disabled}
            >
                {optgroup.options.map(option => {
                    return this.generateOption(option);
                })}
            </optgroup>
        )
    }

    render() {
        return (
            <Host>
                {
                    this.includeLabel
                        ? <sd-label text={this.label}></sd-label>
                        : undefined
                }
                <select
                    id={this.generatedId}
                    onChange={this.changeUpdateHandler}
                    onInput={this.inputUpdateHandler}
                    name={this.name}
                    autoComplete={this.autocomplete}
                    autoFocus={this.autofocus}
                    disabled={this.disabled}
                    multiple={this.multiple}
                    required={this.required}
                    size={this.size}
                >
                    {this.internalOptions.map(option => {
                        if (option.type === "optgroup") {
                            return this.generateOptGroup(option);
                        } else {
                            return this.generateOption(option);
                        }
                    })}
                </select>
            </Host>
        );
    }
}

export type Option = {
    type: "option",
    disabled?: boolean,
    label?: string,
    selected?: boolean,
    value?: string,
    text: string
};

export type OptGroup = {
    type: "optgroup",
    disabled?: boolean,
    label: string,
    options: Option[]
};