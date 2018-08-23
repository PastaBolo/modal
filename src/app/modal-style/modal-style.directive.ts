import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[appModalStyle]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./modal-style.component.css'],
  encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line:component-class-suffix
export class ModalStyleDirective { }
