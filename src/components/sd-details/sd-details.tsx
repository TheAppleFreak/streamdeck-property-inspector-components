import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sd-details',
  styleUrl: 'sd-details.css',
  shadow: true,
})
export class SdDetails {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
