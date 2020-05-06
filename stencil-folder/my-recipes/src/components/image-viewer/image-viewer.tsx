import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'image-viewer',
  styleUrl: 'image-viewer.css',
  shadow: true,
})
export class ImageViewer implements ComponentInterface {
  @Prop() imgUrl1: string;
  @Prop() imgUrl2: string;


  //for each/ zahl eingeben lassen machen, man kann zahl eingeben, wieviel bilder eingefüg werden sollen

  render() {
    return (
      <Host>
        <div class="imgWrapper">
          <div></div>
          <img src={this.imgUrl1} alt="" />
          <img src={this.imgUrl2} alt="" />
          <img src="" alt="add more" />
        </div>
      </Host>
    );
  }

}
