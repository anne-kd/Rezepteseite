import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-rating',
  styleUrl: 'my-rating.css',
  shadow: true,
})
export class MyRating implements ComponentInterface {
@Prop() headline: string;
@Prop() rate: string;

getHeadline(){
  return this.headline;
}

getText(){
  return this.rate;
}
  render() {
    return (
      <Host>
        <slot></slot>
        <div class="container">
          <h3>{this.getHeadline()}</h3>
          <p>{this.getText()}</p>
        </div>
      </Host>
    );
  }

}
