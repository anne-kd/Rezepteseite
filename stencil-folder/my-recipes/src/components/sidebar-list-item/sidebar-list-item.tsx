import {
  Component,
  ComponentInterface,
  h,
  Prop,
  State,
  Method,
} from "@stencil/core";

@Component({
  tag: "sidebar-list-item",
  styleUrl: "sidebar-list-item.css",
  shadow: true,
})
export class SidebarListItem implements ComponentInterface {
  @Prop() kind: string;

  @Prop() unitValue: number;

  @Prop() unit: string;

  @State() multiplicator;

  @State() multiplicatedValue;

  @Method() async setMultiplicator(m: number) {
    this.multiplicator = m;
    this.multiplicatedValue = this.getValue();
  }

  private getUnit(): string {
    return this.unit;
  }
  private getValue(): number {
    return this.unitValue * this.multiplicator;
  }

  render() {
    return (
      <div class={'list-border'}>
        <div class={"kind"}> {this.kind}</div>
        <div class={"kek"}>
          {this.getValue()} {this.getUnit()}
        </div>
      </div>
    );
  }
}
