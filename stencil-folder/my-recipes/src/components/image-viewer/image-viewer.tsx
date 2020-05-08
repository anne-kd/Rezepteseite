import { Component, Host, h, Prop, State, Event, EventEmitter, JSX, Listen } from '@stencil/core';


//this component allows you to insert an image
//if you want more, you can duplicate this component and they will appear next to each other
@Component({
  tag: 'image-viewer',
  styleUrl: 'image-viewer.css',
  shadow: true,
})
export class ImageViewer {
  //you can set the image sourceUrl, alternative text and the width
  @Prop() imgUrl: string;
  @Prop() imgAlt: string;
  @Prop() imgWidth: string;

  @Event() private getBig: EventEmitter;
  @Event() private getSmall: EventEmitter;
  @Event() private changeImgSize: EventEmitter;

  @State() isBig: boolean = false;
  @Listen("changeImgSize")
  private handleClick() {
    this.isBig = !this.isBig;
    this.isBig ? this.getBig.emit() : this.getSmall.emit();
  }

  render(): JSX.Element {

    //this const lets you add any width you like; the height is fixed for optical reeasons
    const imgStyle = {
      width: this.imgWidth
    }

    return (
      <Host>
        <h2> <slot></slot> </h2>
        <div class={!this.isBig ? "" : "wrapper"}>
                    <div style={imgStyle} class={!this.isBig ? "showSmall" : "showBig"}>
            <img onClick={(e: MouseEvent) => this.changeImgSize.emit()} src={this.imgUrl} alt={this.imgAlt} />
          </div>
        </div>
      </Host>
    );
  }
}