import { Component, Host, h, Prop, Method } from "@stencil/core";

@Component({
    tag: "sd-canvas",
    styleUrl: "sd-canvas.scss",
    shadow: true,
})
export class SdCanvas {
    /**
     * The display label for the canvas
     */
    @Prop({reflect: true}) label: string;

    /**
     * The width of the canvas. Defaults to `144`
     */
    @Prop({reflect: true}) width: number = 144;
    
    /**
     * The height of the canvas. Defaults to `144`
     */
    @Prop({reflect: true}) height: number = 144;
    
    /**
     * Returns a reference to the canvas element
     */
    @Method()
    async getCanvas(): Promise<HTMLCanvasElement> {
        return this._canvas;
    }

    private _canvas: HTMLCanvasElement;

    render() {
        return (
            <Host>
                <div class={{
                    "label": true, 
                    "empty": !this.label.length
                }}>{this.label}</div>
                <canvas 
                    class="value" 
                    width={this.width} 
                    height={this.height}
                    ref={(el) => this._canvas = el as HTMLCanvasElement}
                ></canvas>
            </Host>
        );
    }
}
