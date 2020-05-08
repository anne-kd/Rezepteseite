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
          <a href="https://www.facebook.com" target="_blank">f<span>Facebook</span></a>
          <a href="https://www.twitter.com" target="_blank">T<span>Twitter</span></a>
          <a href="https://www.instagram.com" target="_blank">Ig<span>Instagram</span></a>
          <a href="https://www.pinterest.com" target="_blank">P<span>Pinterest</span></a>
        </div>
      </Host>
    );
  }

}
