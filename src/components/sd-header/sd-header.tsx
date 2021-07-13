import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'sd-header',
    styleUrl: 'sd-header.scss',
    shadow: true,
})
export class SdHeader {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
