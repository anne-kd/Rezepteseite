import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'title-titleimage',
  styleUrl: 'title-titleimage.css',
  shadow: true,
})
export class TitleTitleimage implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
