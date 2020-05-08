import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true,
})
export class MyFooter implements ComponentInterface {

  render() {
    return (
      <Host>
        <div id="footer">
          <a href="impressum.html">Impressum</a>
          <a href="impressum.html">Datenschutz</a>
          
          <my-social-share></my-social-share>
        </div>
      </Host>
    );
  }

}
