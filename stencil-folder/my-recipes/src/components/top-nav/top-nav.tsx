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
        <nav class="container">
          <h1>Shahid Shaikh</h1>
          <button id="navbar-button">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul>
            <li><a href="#">Work</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </Host>
    );
  }

}
