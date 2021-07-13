import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'sd-textarea',
    styleUrl: 'sd-textarea.scss',
    shadow: true,
})
export class SdTextarea {
    /**
     * The display label for the textarea
     */
    @Prop() label: string = "";

    @Prop() readonly: boolean = false;
    
    @Prop() name?: string;
    
    @Prop({reflect: true, mutable: true}) value?: string;
    
    @Prop() placeholder?: string;

    @Prop() required: boolean = false;

    @Prop() minLength: number = 0;
    
    @Prop() maxLength: number = 0;
    
    private charCount: number = 0;

    private generatedId: string = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
    
    @Event() changeUpdate: EventEmitter<string>;
    changeUpdateHandler = (ev: InputEvent) => {
        this.changeUpdate.emit((ev.target as HTMLTextAreaElement).value);
    }

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
                <div class="label">{this.label}</div>
                <div class="value">
                    <textarea 
                        id={this.generatedId}
                        name={this.name}
                        placeholder={this.placeholder}
                        minlength={this.minLength > 0 ? this.minLength : undefined} 
                        maxlength={this.maxLength > 0 ? this.maxLength : undefined} 
                        readonly={this.readonly}
                        onChange={this.changeUpdateHandler}
                        onInput={this.inputUpdateHandler}
                    >
                        {this.value}
                    </textarea>
                    {
                        this.maxLength > 0
                        ? <label htmlFor={this.generatedId}>{this.charCount}/{this.maxLength}</label>
                        : undefined
                    }
                </div>
            </Host>
        );
    }
}
