import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

//this component creates the main opener for he website; a big title image with a headline and an optional clickable button
@Component({
  tag: 'title-titleimage',
  styleUrl: 'title-titleimage.css',
  shadow: true,
})
export class TitleTitleimage implements ComponentInterface {

  @Prop() imageUrl: string;
  @Prop() imageAlt: string;
  @Prop() btnText: string;
  @Prop() btnGoalUrl: string;
  //not everybody needs a button in the opener; on default the button is not there, as long as it is explicitly wanted (value=true)
  @Prop() btnVisible: boolean = false;
  
  
  //redirects the user on button click
  handleClick(btnUrl: string) {
    window.location.href = btnUrl;   
  }

  render() {
    return (
      <Host>
        <div class="opener">
          <h1> <slot></slot> </h1>
          {this.btnVisible ? <button onClick={() => this.handleClick(this.btnGoalUrl)}> {this.btnText} </button> : <br></br>}
          <div class="image">
            <img src={this.imageUrl} alt={this.imageAlt} />
          </div>
        </div>
      </Host>
    );
  }

}
