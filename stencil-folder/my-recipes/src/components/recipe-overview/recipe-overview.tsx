import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

//this component creates a white box, with a headline, a clickable button and plain text
@Component({
  tag: 'recipe-overview',
  styleUrl: 'recipe-overview.css',
  shadow: true,
})
export class RecipeOverview implements ComponentInterface {

@Prop() btnText: string;
@Prop() btnGoalUrl: string;
@Prop() headline: string;

//defines where the button leads you; depends on the inserted btnGoalUrl
handleClick(btnUrl: string) {
  window.location.href = btnUrl;
  
}

  render() {
    return (<Host>
      <div class="generalRecipe">
         <h2> {this.headline} </h2>
         {/* for optical reasons */}
         <hr class="line"></hr>
         <p> <slot></slot> </p>
         <button onClick={() => this.handleClick(this.btnGoalUrl)}> {this.btnText} </button>
      </div>
    </Host>);
  }
}

