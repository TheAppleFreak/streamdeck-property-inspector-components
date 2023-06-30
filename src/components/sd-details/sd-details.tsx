import { Component, Host, h, Prop, Method, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: "sd-details",
    styleUrl: "sd-details.scss",
    shadow: true,
})
export class SdDetails {
    /**
     * Whether to include the label in the rendered HTML
     */
    @Prop() includeLabel: boolean = false;

    /**
     * The display label for the details element
     */
    @Prop({ reflect: true }) label: string = "";

    /**
     * The summary message for the details element
     */
    @Prop({ reflect: true }) summary: string = "";

    /** 
     * Whether the details element should initially be open (`true`) or closed (`false`). Defaults to `false`
     */
    @Prop({ reflect: true, mutable: true }) opened: boolean = false;

    /** 
     * Whether the text should have margins on the text elements
     */
    @Prop({ reflect: true }) innerMargins: boolean = true;

    private _details: HTMLDetailsElement;

    /**
     * Opens the details element. Has no effect if the element is already open
     * @returns Returns the new state of the element (true = open, false = closed)
     */
    @Method()
    async open(): Promise<boolean> {
        this.opened = true;
        return this.opened;
    }

    /**
     * Closes the details element. Has no effect if the element is already closed
     * @returns Returns the new state of the element (true = open, false = closed)
     */
    @Method()
    async close(): Promise<boolean> {
        this.opened = false;
        return this.opened;
    }

    /**
     * Toggles the open state of the details element, closing it if it is open and opening it if it is closed
     * @returns Returns the new state of the element (true = open, false = closed)
     */
    @Method()
    async toggle(): Promise<boolean> {
        this.opened = !this.opened;
        return this.opened;
    }

    /**
     * Emits an `openChanged` event whenever the details element is opened (true = open, false = closed)
     */
    @Event() openChanged: EventEmitter<boolean>;
    openChangedHandler = (_ev: any) => {
        this.openChanged.emit(this._details.open);
    }

    // This is used to inject no margin styles into slotted elements
    noInnerMarginsStyle = "::slotted(*){margin: 0;padding: 0}";

    render() {
        return (
            <Host style={!this.includeLabel ? { maxWidth: "none" } : undefined}>
                {
                    !this.innerMargins
                        ? <style>{this.noInnerMarginsStyle}</style>
                        : undefined
                }
                {
                    this.includeLabel
                        ? <sd-label text={this.label}></sd-label>
                        : undefined
                }
                <details class={{ "value": this.includeLabel }} open={this.opened} ref={(el => this._details = el as HTMLDetailsElement)}>
                    {
                        this.summary
                            ? <summary>{this.summary}</summary>
                            : undefined
                    }
                    <slot />
                </details>
            </Host>
        );
    }
}
