import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'image-viewer',
  styleUrl: 'image-viewer.css',
  shadow: true,
})
export class ImageViewer implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
