import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'sd-checkbox',
    styleUrl: 'sd-checkbox.scss',
    shadow: true,
})
export class SdCheckbox {
    private generatedId: string = Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);

    /**
     * Whether to include the label in the rendered HTML. Useful when used in a group
     */
    @Prop() public includeLabel: boolean = true;

    /**
       * The display label for the checkbox
       */
    @Prop({ reflect: true }) public label: string = "";

    /**
       * The value
       */
    @Prop({ reflect: true }) public value: string = "";

    /**
     * Whether the checkbox is checked
     */
    @Prop({ reflect: true, mutable: true }) public checked: boolean = false;

    /**
     * Whether the checkbox is in an indeterminate state
     */
    @Prop({ reflect: true, mutable: true }) public indeterminate: boolean = false;

    /**
     * Emits a `changeUpdate` event whenever the checkbox is changed. 
     * Fires after the checkbox loses focus
     */
    @Event() changeUpdate: EventEmitter<InputEvent>;
    private changeUpdateHandler(ev: InputEvent) {
        this.changeUpdate.emit(ev);
    }

    /**
     * Emits a `clickUpdate` event whenever the checkbox is clicked. 
     */
    @Event() clickUpdate: EventEmitter<MouseEvent>;
    private clickUpdateHandler(ev: MouseEvent) {
        this.clickUpdate.emit(ev);
    }

    /**
     * Emits a `inputUpdate` event whenever the checkbox is changed. 
     * Fires every time the checkbox is checked or unchecked
     */
    @Event() inputUpdate: EventEmitter<InputEvent>;
    private inputUpdateHandler(ev: InputEvent) {
        this.checked = (ev.target as HTMLInputElement).checked;
        this.inputUpdate.emit(ev);
    }

    render() {
        return (
            <Host>
                {
                    this.includeLabel
                        ? <sd-label text={this.label}></sd-label>
                        : undefined
                }
                <input type="checkbox"
                    id={this.generatedId}
                    checked={this.checked}
                    indeterminate={this.indeterminate}
                    onChange={(event: InputEvent) => this.changeUpdateHandler(event)}
                    onClick={(event: MouseEvent) => this.clickUpdateHandler(event)}
                    onInput={(event: InputEvent) => this.inputUpdateHandler(event)}
                >
                </input>
                <label htmlFor={this.generatedId}>
                    <span></span>
                    {this.value}
                </label>

            </Host>
        );
    }

}
