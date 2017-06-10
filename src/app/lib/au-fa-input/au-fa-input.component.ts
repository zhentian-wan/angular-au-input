import {Component, Input, ContentChild, AfterContentInit, HostBinding} from '@angular/core';
import {InputRefDirective} from 'app/lib/common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements AfterContentInit {

  @Input()
  icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  ngAfterContentInit() {
    if (!this.input) {
      console.error('You forgot pass in the input field');
    }
  }

  get classes() {

    const cssClasses = {};

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}
