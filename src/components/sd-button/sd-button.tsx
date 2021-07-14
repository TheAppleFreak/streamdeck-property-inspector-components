import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sd-button',
  styleUrl: 'sd-button.css',
  shadow: true,
})
export class SdButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
