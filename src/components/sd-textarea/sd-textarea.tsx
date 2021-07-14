import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: "sd-textarea",
    styleUrl: "sd-textarea.scss",
    shadow: true,
})
export class SdTextarea {
    /**
     * The display label for the textarea
     */
    @Prop({reflect: true}) label: string = "";

    /**
     * Whether the textarea should be read only. Defaults to `false`
     */
    @Prop({reflect: true}) readonly: boolean = false;
    
    /**
     * The name of the textarea
     */
    @Prop() name?: string;
    
    /**
     * A predefined value for the textarea
     */
    @Prop({mutable: true}) value: string = "";
    
    /**
     * The placeholder value for the input field
     */
    @Prop({reflect: true}) placeholder?: string;

    /**
     * Whether or not the textarea is required. Defaults to `false`
     */
    @Prop() required: boolean = false;

    /**
     * The minimum length of the content of the textarea
     */
    @Prop({reflect: true}) minlength: number = 0;
    
    /**
     * The maximum length of the content of the textarea
     */
    @Prop({reflect: true}) maxlength: number = 0;
    
    private charCount: number = this.value.length;

    private generatedId: string = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
    
    /**
     * Emits a `changeUpdate` event whenever the textarea is changed. Fires after the textarea loses focus
     */
    @Event() changeUpdate: EventEmitter<string>;
    changeUpdateHandler = (ev: InputEvent) => {
        this.changeUpdate.emit((ev.target as HTMLTextAreaElement).value);
    }
    
    /**
     * Emits a `inputUpdate` event whenever the textarea is changed. Fires every time something is typed into the textarea
     */
    @Event() inputUpdate: EventEmitter<{data: string | null, inputType: string}>;
    inputUpdateHandler = (ev: InputEvent) => {
        this.value = (ev.target as HTMLTextAreaElement).value;
        this.charCount = this.value.length;
        this.inputUpdate.emit({
            data: ev.data,
            inputType: ev.inputType
        });
    }

    render() {
        return (
            <Host>
                <div class={{
                    "label": true,
                    "empty": !this.label.length,
                    "count-offset": !!this.maxlength
                }}>{this.label}</div>
                <div class="value">
                    <textarea 
                        id={this.generatedId}
                        name={this.name}
                        placeholder={this.placeholder}
                        minlength={this.minlength ? this.minlength : undefined} 
                        maxlength={this.maxlength ? this.maxlength : undefined} 
                        readonly={this.readonly}
                        onChange={this.changeUpdateHandler}
                        onInput={this.inputUpdateHandler}
                    >
                        {this.value}
                    </textarea>
                    {
                        this.maxlength
                        ? <label htmlFor={this.generatedId}>{this.charCount}/{this.maxlength}</label>
                        : undefined
                    }
                </div>
            </Host>
        );
    }
}
