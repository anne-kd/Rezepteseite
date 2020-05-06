import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'image-viewer',
  styleUrl: 'image-viewer.css',
  shadow: true,
})
export class ImageViewer implements ComponentInterface {
  @Prop() imgUrl: string;
  @Prop() imgAlt: string;
  @Prop() imgWidth: string;

 
  render() {

    const imgStyle = {
      width: this.imgWidth
    }

    return (
      <Host>
        <h2> <slot></slot> </h2>
        <div style={imgStyle} class="imgSize">
          <img src={this.imgUrl} alt={this.imgAlt} />   
        </div>
      </Host>
    );
  }
}
