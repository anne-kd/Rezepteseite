import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'image-viewer',
  styleUrl: 'image-viewer.css',
  shadow: true,
})
export class ImageViewer implements ComponentInterface {
  // @Prop() imgCount: number;
  @Prop() imgUrl: string;
  @Prop() imgAlt: string;
  @Prop() imgWidth: string;

  setImgWidth(){
  
  }

  render() {
    return (
      <Host>
        <h2> <slot></slot> </h2>
        <div class="imgSize">
          <img src={this.imgUrl} alt={this.imgAlt} />   
        </div>
      </Host>
    );
  }
}
