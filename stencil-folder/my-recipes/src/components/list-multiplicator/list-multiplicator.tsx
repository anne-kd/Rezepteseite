import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "list-multiplicator",
  styleUrl: "list-multiplicator.css",
  shadow: true,
})
export class ListMultiplicator implements ComponentInterface {
  @Prop() multiplicator: number;
  @Event() multiplicatorChanged: EventEmitter;

  handleClick(operator: string) {
    if (operator == "+" && this.multiplicator < 100) {
      this.multiplicator++;
    } else if (operator == "-" && this.multiplicator > 1) {
      this.multiplicator--;
    }
    this.multiplicatorChanged.emit(this.multiplicator);
  }

  render() {
    return (
      <host>
        <h2>Mitspeisende</h2>
        <button
          onClick={() => {
            this.handleClick("-");
          }}
        >
          -
        </button>
          <h3>{this.multiplicator}</h3>
        <button
          onClick={() => {
            this.handleClick("+");
          }}
        >
          +
        </button>
        <h2>Zutaten</h2>
      </host>
    );
  }
}
