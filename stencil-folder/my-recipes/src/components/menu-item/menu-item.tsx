import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'menu-item',
  styleUrl: 'menu-item.css',
  shadow: true,
})
export class MenuItem implements ComponentInterface {
  @Prop() name:string;
  @Prop() link:string;
  @Prop() hover1:string;
  @Prop() hover2:string;
  @Prop() hover3:string;
  @Prop() hover4:string;


  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
