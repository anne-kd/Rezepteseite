import { Component, ComponentInterface, Host, h, Event, EventEmitter, Listen, State } from '@stencil/core';

@Component({
  tag: 'recipe-ratings',
  styleUrl: 'recipe-ratings.css',
  shadow: true,
})
export class RecipeRatings implements ComponentInterface {
  @State() ratingBox!: HTMLElement;
  
  @Event() add: EventEmitter;
  @Listen("add")
  addRating(){
    let html = `<my-rating headline="Hello" rate="World"></my-rating>`;
    this.ratingBox.insertAdjacentHTML('afterend', html);
  }

  showPopup(){
    let popup = document.querySelector("add-new-rating") as HTMLElement;
    popup.classList.add("display");

    this.add.emit();
  }

  render() {
    return (
      <Host>
        <div class="headline" >
          <slot></slot> 
        </div>
        <div ref={(el)=> this.ratingBox = el as HTMLElement}>
          <my-rating headline="Nice Recipe!" rate="Well done!"></my-rating>
          <my-rating headline="Not good at all" rate="I tried that recepie several times but ist was just not good"></my-rating>
        </div>
      
        <div id="addrating" onClick={() => {this.showPopup()}}>
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
