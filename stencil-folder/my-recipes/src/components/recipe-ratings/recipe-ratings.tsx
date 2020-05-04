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

        <my-rating headline="Nice Recipe!" rate="Well done!"></my-rating>
        <my-rating headline="Not good at all" rate="I tried that recepie several times but ist was just not good"></my-rating>

        <div id="addrating" >
          <p>Neue Bewertung hinzufügen</p>
          <div id="addbutton">
            <span></span>
            <span></span>
          </div>
        </div>
        
      </Host>
    );
  }

}
