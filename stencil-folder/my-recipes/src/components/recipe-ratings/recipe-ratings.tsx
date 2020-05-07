import { Component, ComponentInterface, Host, h, Event, EventEmitter, Listen, State } from '@stencil/core';

@Component({
  tag: 'recipe-ratings',
  styleUrl: 'recipe-ratings.css',
  shadow: true,
})
export class RecipeRatings implements ComponentInterface {
  @State() ratingBox!: HTMLElement;
  @State() ratingPopup!: HTMLElement;
  @State() titleValue: string;
  @State() ratingValue: string;
  
  @Event() add: EventEmitter;
  @Listen("add")
  addRating(){
    this.closePopup();
    let html = `<my-rating headline="${this.titleValue}" rate="${this.ratingValue}"></my-rating>`;
    this.ratingBox.insertAdjacentHTML('afterend', html);
  }

  showPopup(){
    this.ratingPopup.classList.add("display");
  }
  closePopup(){
    this.ratingPopup.classList.remove("display");
  }

  render() {
    return (
      <Host>
        <div class="headline" >
          <slot></slot> 
        </div>
        <add-new-rating class="" 
          ref={(el)=> this.ratingPopup = el as HTMLElement}
          onTitleChanged = {(e: CustomEvent) => this.titleValue = e.detail}
          onTextChanged = {(e: CustomEvent) => this.ratingValue = e.detail}
          onButtonClickOK = {(e:CustomEvent)=> this.add.emit()}
          onButtonClickCancel = {(e:CustomEvent)=> this.closePopup()}
        ></add-new-rating>
        <div ref={(el)=> this.ratingBox = el as HTMLElement}>
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
