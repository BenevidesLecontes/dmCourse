import { Directive, ElementRef, AfterViewInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormatadata]'
})
export class FormatadataDirective  {

  @Input() hora: string;

  constructor(private elem: ElementRef) {

  }


  @HostListener('input', ['$event'])
  inputChange(s: any){
    const nChars = s.target.value;
    let thisValue = nChars.replace(/[^\d]+/g, '');
    let result = "";

    if(thisValue.length < 2){
      result = thisValue;
    } else {
      result = thisValue.substring(0,2);
      if(thisValue.length <4){
        result += '/' + thisValue.substring(2);
      } else {
        result += '/' + thisValue.substring(2, 4) + '/' +  thisValue.substring(4);
      }
    }
    s.target.value = result;

    /*
    if(nChars === 2 || nChars === 5){
      let thisValue = s.target.value;
      thisValue += '/';
      s.target.value = thisValue;
    }
    */

  }

}
