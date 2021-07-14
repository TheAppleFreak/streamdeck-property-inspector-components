import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "sd-button-group",
  styleUrl: "sd-button-group.scss",
  shadow: true,
})
export class SdButtonGroup {

  render() {
    return (
      <Host>
        <slot name="left"></slot>
        <slot name="right"></slot>
      </Host>
    );
  }
}
