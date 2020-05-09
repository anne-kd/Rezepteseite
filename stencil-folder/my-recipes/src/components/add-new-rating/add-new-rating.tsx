import { Component, ComponentInterface, Host, h, Event, EventEmitter, State } from '@stencil/core';


@Component({
  tag: 'add-new-rating',
  styleUrl: 'add-new-rating.css',
  shadow: true,
})
export class AddNewRating implements ComponentInterface {
  @State() textInput : HTMLElement;
  @State() titleInput : HTMLElement;

  @Event() buttonClickOK: EventEmitter;
  @Event() buttonClickCancel: EventEmitter;
  @Event() titleChanged: EventEmitter<string>;
  @Event() textChanged: EventEmitter<string>;

  changeTitle(e: UIEvent) {
    const input = e.target as HTMLInputElement;
    this.titleChanged.emit(input.value);
  }

  changeText(e: UIEvent) {
    const input = e.target as HTMLInputElement;
    this.textChanged.emit(input.value);
  }
  
  send(){
    this.buttonClickOK.emit();
    this.textInput.innerText = "";
    this.titleInput.innerText = "";
  }
  delete(){
    this.buttonClickCancel.emit();
    this.textInput.innerText = "";
    this.titleInput.innerText = "";
  }

  render() {
    return (
      <Host>
        <div id="popup">
          <h3>Neue Bewertung hinzufügen</h3>
          <label htmlFor="title"> Titel </label>
            <input type="text" name="title" id="title" 
              onInput={(e: UIEvent) => this.changeTitle(e)}
              ref={(el)=> this.titleInput = el as HTMLElement}
            />
          <label htmlFor="rating"> Beschreibung </label>
            <textarea  name="rating" id="rating" 
              onInput={(e: UIEvent) => this.changeText(e)}
              ref={(el)=> this.textInput = el as HTMLElement}
            ></textarea>
          <button id="ok" onClick = {(e: UIEvent) => this.send()}>OK</button>
          <button id="cancel" onClick = {(e: UIEvent) => this.delete()}>Abbrechen</button>
        </div>
      </Host>
    );
  }

}
