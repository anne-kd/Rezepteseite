import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';


//this component allows you to insert an image
//if you want more, you can duplicate this component and they will appear next to each other
@Component({
  tag: 'image-viewer',
  styleUrl: 'image-viewer.css',
  shadow: true,
})
export class ImageViewer implements ComponentInterface {
  //you can set the image sourceUrl, alternative text and the width
  @Prop() imgUrl: string;
  @Prop() imgAlt: string;
  @Prop() imgWidth: string;

 
  render() {

    //this const lets you add any width you like; the height is fixed for optical reeasons
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
