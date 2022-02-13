import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isopened:boolean=false;
  @HostListener('click') clicked(){
    this.isopened=!this.isopened;
  }
  constructor() { }

}
