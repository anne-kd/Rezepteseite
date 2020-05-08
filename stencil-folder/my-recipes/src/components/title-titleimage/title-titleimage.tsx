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

  @Prop() btnVisible: boolean;
  //später Button optional machen

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
            {this.btnVisible ? <button> {this.btnText} </button> : <br></br>}
        </div>
      </Host>
    );
  }

}
