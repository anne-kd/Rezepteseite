import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'title-titleimage',
  styleUrl: 'title-titleimage.css',
  shadow: true,
})
export class TitleTitleimage implements ComponentInterface {

  // @Element() btn: HTMLElement;
  ////import EventEmitter, Event, Element

  @Prop() imageUrl: string;
  @Prop() imageAlt: string;
  @Prop() btnText: string;
  @Prop() btnGoalUrl: string;
  @Prop() btnVisible: boolean;
 
  // @Event() add: EventEmitter;
  
  handleClick(btnUrl: string) {
    window.location.href = btnUrl;
    
  }

  render() {
    return (
      <Host>
        <div class="opener">
          <h1> <slot></slot> </h1>
          {this.btnVisible ? <button onClick={() => this.handleClick(this.btnGoalUrl)}> {this.btnText} </button> : <br></br>}
          <div class="image">
            <img src={this.imageUrl} alt={this.imageAlt} />
          </div>
        </div>
      </Host>
    );
  }

}
