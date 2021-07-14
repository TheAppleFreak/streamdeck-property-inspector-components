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
    @Prop({reflect: true}) label: string;
    
    /**
     * The hover text for the form entry
     */
    @Prop({reflect: true}) altText: string;
    
    /**
     * Whether the input should be read only. Defaults to `false`
     */
    @Prop({reflect: true}) readonly: boolean = false;

    /**
     * The type for the input box. Defaults to `text`
     */
    @Prop() type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";

    /**
     * A predefined value for the input
     */
    @Prop({reflect: true, mutable: true}) value: string;

    /**
     * The placeholder value for the input field
     */
    @Prop({reflect: true}) placeholder?: string;

    /**
     * Whether or not the input is required. Defaults to `false`
     */
    @Prop() required?: boolean = false;

    /**
     * A validation regex for the input. Will show a checkmark next to the input when validated
     */
    @Prop({reflect: true}) pattern?: string;

    /**
     * The input mode to use for virtual keyboards
     */
    @Prop({reflect: true}) inputmode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";

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
    @Event() inputUpdate: EventEmitter<{data: string | null, inputType: string}>;
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
                <div class={{
                    "label": true,
                    "empty": !this.label.length
                }}>{this.label}</div>
                <input class="value" 
                    type={this.type}
                    value={this.value}
                    required={this.required} 
                    placeholder={this.placeholder} 
                    readonly={this.readonly}
                    pattern={this.pattern}
                    onChange={this.changeUpdateHandler} 
                    onInput={this.inputUpdateHandler}
                >
                </input>
            </Host>
        );
    }
}
