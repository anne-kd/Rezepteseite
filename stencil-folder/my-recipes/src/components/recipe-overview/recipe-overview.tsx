import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'recipe-overview',
  styleUrl: 'recipe-overview.css',
  shadow: true,
})
export class RecipeOverview implements ComponentInterface {

@Prop() btnText: string;
@Prop() btnGoalUrl: string;
@Prop() headline: string;

handleClick(btnUrl: string) {
  window.location.href = btnUrl;
  
}

  render() {
    return (<Host>
      <div class="generalRecipe">
         <h2> {this.headline} </h2>
         <hr class="line"></hr>
         <p> <slot></slot> </p>
         <button onClick={() => this.handleClick(this.btnGoalUrl)}> {this.btnText} </button>
      </div>
    </Host>);
  }
}

