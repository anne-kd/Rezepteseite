import {Component, ComponentInterface, h, Prop} from '@stencil/core';


@Component({
  tag: 'sidebar-list-item',
  styleUrl: 'sidebar-list-item.css',
  shadow: true,
})
export class SidebarListItem implements ComponentInterface {

  @Prop() kind: string;

  @Prop() value: number;

  @Prop() unit: string;

  private getUnit(): string {
    return this.unit;
  }
  private getValue(): number {
    let output:number;
    let val: number = this.value;
    let multiplicator = document.getElementById('multi').innerHTML;
    let multi:number = parseInt(multiplicator);
    let singeleVal: number = val/multi;
   if (multi>1 && multi>100)    {
     output = singeleVal*multi;
   }                      else{
     output =0;
   }
    return output;
  }
  private getKind(): string {
    return this.kind;
  }


      render() {
        return <div> {this.getKind()}<div class={'kek'}>{this.getValue()}{this.getUnit()}</div></div>;
    }



}

