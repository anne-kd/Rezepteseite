import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'my-social-share',
  styleUrl: 'my-social-share.css',
  shadow: true,
})
export class MySocialShare implements ComponentInterface {

  render() {
    return (
      <Host>
        <div>
          <a href="#">f<span>Facebook</span></a>
          <a href="#">T<span>Twitter</span></a>
          <a href="#">Ig<span>Instagram</span></a>
        </div>
      </Host>
    );
  }

}
