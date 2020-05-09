import {Component, ComponentInterface, Host, h, Prop, State} from '@stencil/core';
import {isStep} from "../../utils/utils";

@Component({
  tag: 'recipe-page',
  styleUrl: 'recipe-page.css',
  shadow: true,
})
export class RecipePage implements ComponentInterface {

  @State() steps: HTMLElement;
  @Prop() title:string;
  @Prop() image:string;
  @Prop() one:string;
  @Prop() two:string;
  @Prop() three:string;
  @Prop() four:string;
  @Prop() five:string;


  private getTitle(): string {
    return (this.title);
  }
  private getImage(): string {
    return (this.image);
  }
  private getSteps(){
    let step = isStep(this.one, this.two, this.three, this.four, this.five);
   return step;
  }


  render() {
    return (
      <Host> <img src={this.getImage()}/><div class={'content'}> <h1>{this.getTitle()}</h1><hr></hr>

        <div class={'text'}><div innerHTML={this.getSteps()}></div></div></div>
      </Host>
    );
  }

}
