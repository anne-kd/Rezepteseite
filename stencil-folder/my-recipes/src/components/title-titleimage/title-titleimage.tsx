import { Component, ComponentInterface, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'title-titleimage',
  styleUrl: 'title-titleimage.css',
  shadow: true,
})
export class TitleTitleimage implements ComponentInterface {

  // @Element() btn: HTMLElement;

  @Prop() imageUrl: string;
  @Prop() imageAlt: string;
  @Prop() btnText: string;

  // @Event() add: EventEmitter;
  // <button onClick={() => this.handleClick()}> {this.btnText} </button>

 
  // handleClick() {
  //   alert("hi");
  // }

  render() {
    return (
      <Host>
        <div class="opener">
          <h1> <slot></slot> </h1>
          <div class="image">
           <img src={this.imageUrl} alt={this.imageAlt} />
          </div>
          <button> {this.btnText} </button>
        </div>
      </Host>
    );
  }

}
