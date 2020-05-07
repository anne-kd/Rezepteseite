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
    let aMulti:number = this.multiplicator;
    document.getElementById("minus").addEventListener("click", function(){
      aMulti--;
    });
    document.getElementById("plus").addEventListener("click", function(){
      aMulti++;
    });
    this.multiplicator =aMulti;
    return aMulti;
  }

  render() {
    return  <h3>{this.getMulti()}</h3>;
  }

}
