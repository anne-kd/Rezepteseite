import { h } from '@stencil/core';
import { Component, ComponentInterface, Host, Prop } from '@stencil/core';
@Component({
  tag: 'recipe-overview',
  styleUrl: 'recipe-overview.css',
  shadow: true,
})
export class RecipeOverview implements ComponentInterface {

@Prop() btnText: string;
@Prop() headline: string;

  render() {
    return (<Host>
      <div class="generalRecipe">
         <h2> {this.headline} </h2>
         <hr class="line"></hr>
         <p> <slot></slot> </p>
         <button> {this.btnText} </button>

      </div>
    </Host>);
  }
}

