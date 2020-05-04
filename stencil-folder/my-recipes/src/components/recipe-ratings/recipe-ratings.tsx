import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'recipe-ratings',
  styleUrl: 'recipe-ratings.css',
  shadow: true,
})
export class RecipeRatings implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="headline" >
          <slot></slot> 
        </div>

        <div id="addrating" >
          <p>Neue Bewertung hinzufügen</p>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </Host>
    );
  }

}
