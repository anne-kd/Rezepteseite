import {
  Component,
  ComponentInterface,
  Host,
  h,
  Element,
  Prop,
  Watch,
} from "@stencil/core";

@Component({
  tag: "recipe-ingredients",
  styleUrl: "recipe-ingredients.css",
  shadow: false,
})
export class RecipeIngredients implements ComponentInterface {
  @Prop() multiplicator: number;
  @Element() el: HTMLElement;

  @Watch("multiplicator")
  setMultiplicators(newValue: number) {
    this.getAllIngredientItems().forEach((item: HTMLSidebarListItemElement) =>
      item.setMultiplicator(newValue)
    );
  }

  componentDidLoad() {
    this.setMultiplicators(this.multiplicator);
  }
  getAllIngredientItems() {
    return this.el.querySelectorAll<HTMLSidebarListItemElement>(
      "sidebar-list-item"
    );
  }
  render() {
    return (
      <Host>
        <list-multiplicator
          multiplicator={this.multiplicator}
          onMultiplicatorChanged={(e: CustomEvent) =>
            (this.multiplicator = e.detail)
          }
        ></list-multiplicator>
        <slot></slot>
      </Host>
    );
  }
}
