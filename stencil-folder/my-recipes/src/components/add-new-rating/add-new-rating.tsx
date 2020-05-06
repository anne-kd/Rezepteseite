import { Component, ComponentInterface, Host, h, Event, EventEmitter, Listen, State } from '@stencil/core';


@Component({
  tag: 'add-new-rating',
  styleUrl: 'add-new-rating.css',
  shadow: true,
})
export class AddNewRating implements ComponentInterface {
  @State() ratingTitle: string
  @State() ratingText: string
  @Event() buttonClick: EventEmitter

  @Listen("buttonClick")
  hidePopup(){
    let popup = document.querySelector("add-new-rating");
    popup.classList.remove("display");
    console.log(this.ratingTitle, this.ratingText);
  }

  titleInput(e: UIEvent){
    const inputT = e.target as HTMLInputElement;
    this.ratingTitle = inputT.value;
  }
  
  ratingInput(elem: UIEvent){
    const inputR = elem.target as HTMLInputElement;
    this.ratingText = inputR.value;
  }

  render() {
    return (
      <Host>
        <div id="popup">
          <h3>Neue Bewertung hinzufügen</h3>
          <label htmlFor="title"> Titel </label>
            <input type="text" name="title" id="title" onInput={(event: UIEvent)=>{this.titleInput(event)}}/>
          <label htmlFor="rating"> Beschreibung </label>
            <input type="text" name="rating" id="rating" onInput={(event: UIEvent)=>{this.ratingInput(event)}}/>
          <button id="ok" onClick={()=>{this.buttonClick.emit()}}>OK</button>
          <button id="cancel" onClick={()=>{this.buttonClick.emit()}}>Abbrechen</button>
        </div>
      </Host>
    );
  }

}
