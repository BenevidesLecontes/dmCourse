import { Directive, HostListener } from '@angular/core';
import { isNumber } from 'util';

@Directive({
  selector: '[appSonumeros]'
})
export class SonumerosDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  inputChange(s: any){
      let thisValue = s.target.value;
      thisValue = thisValue.replace(/[^\d]+/g, '')
      s.target.value = thisValue;
  }
  
}
