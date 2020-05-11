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
              <li><a href="Ananascurry.html">Ananascurry</a> </li>
              <li><a href="zitronenhuhn.html">Zitronenhühnchen</a> </li>
              <li><a href="brownies.html">Brownies</a> </li>
            </ul></li>
          </ul>
          <ul class="small">
            <li><a href="index.html">Home</a> </li>
            <li><a href="#">Anne</a> 
            <ul class="small-drop">
              <li><a href="zitronenhuhn.html">Zitronenhühnchen</a> </li>
            </ul></li>
            <li><a href="#">Krissis</a>
              <ul class="small-drop">
              <li><a href="brownies.html">Brownies</a> </li>
              </ul></li>
            <li><a href="#">Jonas</a> 
              <ul class="small-drop">
              <li><a href="Ananascurry.html">Ananascurry</a> </li>
            </ul></li>
          </ul>
        </div>
      </Host>
    );
  }

}
