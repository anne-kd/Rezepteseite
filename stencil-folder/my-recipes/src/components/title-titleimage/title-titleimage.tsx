import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'title-titleimage',
  styleUrl: 'title-titleimage.css',
  shadow: true,
})
export class TitleTitleimage implements ComponentInterface {

  @Prop() pageTitle: string;
  @Prop() imageUrl: string;
  @Prop() imageAlt: string;
  @Prop() btnText: string;

 
  render() {
    return (
      <Host>
        <div class="opener">
          <h1> {this.pageTitle} </h1>
          <div class="image">
           <img src={this.imageUrl} alt={this.imageAlt} />
          </div>
          <button> {this.btnText} </button>
        </div>
      </Host>
    );
  }

}
