import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'top-nav',
  styleUrl: 'top-nav.css',
  shadow: true,
})
export class TopNav implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class='placeholder'></div>
        <div class="nav">
          <ul class="big">
            <li><a href="#">alle Rezepte</a> <ul class="big-drop">
              <li><a href="#">ErdbeerTorte</a> </li>
              <li><a href="#">Gemüse-Lasagne</a> </li>
              <li><a href="#">Rattatouli</a> </li>
              <li><a href="#">Zitronenhühnchen</a> </li>
              <li><a href="#">Zitrone-Ingwer-Limonade</a> </li>
              <li><a href="#">ZitronenKuchen</a> </li>
            </ul></li>
          </ul>
          <ul class="small">
            <li><a href="/index.html">Home</a> </li>
            <li><a href="#">Zitrone</a> <ul class="small-drop">
              <li><a href="#">Zitronenkuchen</a> </li>
              <li><a href="#">Zitrone-Ingwer-Limonade</a> </li>
            </ul></li>
            <li><a href="#">Krissis</a> </li>
            <li><a href="#">Jonas</a> </li>
          </ul>
        </div>
      </Host>
    );
  }

}
