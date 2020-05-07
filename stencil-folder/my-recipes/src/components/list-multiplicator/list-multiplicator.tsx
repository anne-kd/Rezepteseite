import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'list-multiplicator',
  styleUrl: 'list-multiplicator.css',
  shadow: true,
})
export class ListMultiplicator implements ComponentInterface {

  @Prop() multiplicator: number;


  private getMulti(): number {
    console.log('test');
    this.multiplicator;
    return this.multiplicator;
  }
  handleClick(operator:string){
    if (operator=='+' && this.multiplicator < 100){this.multiplicator++;}
    else if(operator=='-'&& this.multiplicator > 1){this.multiplicator--;}
    this.render();
  }


  render() {
    return   <host><button onClick={() => {this.handleClick('+')}}>+</button> <h3>{this.getMulti()}</h3><button onClick={() => {this.handleClick('-')}}>-</button></host>;
  }

}
