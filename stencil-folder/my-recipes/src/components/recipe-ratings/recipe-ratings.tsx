import { Component, ComponentInterface, Host, h, Event, EventEmitter, Listen, Method } from '@stencil/core';

@Component({
  tag: 'recipe-ratings',
  styleUrl: 'recipe-ratings.css',
  shadow: true,
})
export class RecipeRatings implements ComponentInterface {

  @Method()
  getHeadline(){

  }

  @Event() add: EventEmitter;
  @Listen("add")
  addRating(){

  }

  addNewRating(){
    let popup = document.querySelector("add-new-rating");
    popup.classList.add("display");
  }

  render() {
    return (
      <Host>
        <div class="headline" >
          <slot></slot> 
        </div>

        <my-rating headline="Nice Recipe!" rate="Well done!"></my-rating>
        <my-rating headline="Not good at all" rate="I tried that recepie several times but ist was just not good"></my-rating>

        <div id="addrating" onClick={() => {this.addNewRating()}}>
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
