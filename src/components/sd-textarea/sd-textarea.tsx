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
    @Prop({ reflect: true }) public label: string = "";

    /**
     * Whether the textarea should be read only. Defaults to `false`
     */
    @Prop({ reflect: true }) public readonly: boolean = false;

    /**
     * Whether the textarea should be disabled. Defaults to `false`
     */
    @Prop({ reflect: true }) public disabled: boolean = false;

    /**
     * The name of the textarea
     */
    @Prop() public name?: string;

    /**
     * A predefined value for the textarea
     */
    @Prop({ mutable: true }) public value: string = "";

    /**
     * The placeholder value for the input field
     */
    @Prop({ reflect: true }) public placeholder?: string;

    /**
     * Whether or not the textarea is required. Defaults to `false`
     */
    @Prop() public required: boolean = false;

    /**
     * The minimum length of the content of the textarea
     */
    @Prop({ reflect: true }) public minlength: number = 0;

    /**
     * The maximum length of the content of the textarea
     */
    @Prop({ reflect: true }) public maxlength: number = 0;

    private generatedId: string = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);

    /**
     * Emits a `changeUpdate` event whenever the textarea is changed. Fires after the textarea loses focus
     */
    @Event() changeUpdate: EventEmitter<InputEvent>;
    private changeUpdateHandler(ev: InputEvent) {
        this.changeUpdate.emit(ev);
    }

    /**
     * Emits a `inputUpdate` event whenever the textarea is changed. Fires every time something is typed into the textarea
     */
    @Event() inputUpdate: EventEmitter<InputEvent>;
    private inputUpdateHandler(ev: InputEvent) {
        this.value = (ev.target as HTMLTextAreaElement).value;
        this.inputUpdate.emit(ev);
    }

    render() {
        return (
            <Host>
                <sd-label text={this.label} count-offset={!!this.maxlength}></sd-label>
                <div class="value">
                    <textarea
                        id={this.generatedId}
                        name={this.name}
                        placeholder={this.placeholder}
                        minlength={this.minlength ? this.minlength : undefined}
                        maxlength={this.maxlength ? this.maxlength : undefined}
                        readonly={this.readonly}
                        disabled={this.disabled}
                        // I should be able to do this without the anonymous function but it isn't working
                        // idk why
                        onChange={(event: InputEvent) => this.changeUpdateHandler(event)}
                        onInput={(event: InputEvent) => this.inputUpdateHandler(event)}
                    >
                        {this.value}
                    </textarea>
                    {
                        this.maxlength
                            ? <label htmlFor={this.generatedId}>{this.value.length}/{this.maxlength}</label>
                            : undefined
                    }
                </div>
            </Host>
        );
    }
}
