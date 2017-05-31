import {Directive, HostListener} from '@angular/core';

@Directive({
    selector: 'au-fa-input input'
})
export class InputRefDirective {

  focus = false;

  @HostListener('focus')
  isFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  isBlur() {
    this.focus = false;
  }
}
