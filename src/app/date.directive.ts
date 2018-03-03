import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDate]',
})
export class DateDirective implements AfterViewInit {
  private keyPressed: any;
  @Input() hora: string;
  constructor(private element: ElementRef) {
  }

  ngAfterViewInit(): void {
  }

  @HostListener('input', ['$event'])
  inputChange(e: any) {
    if (!this.keyPressed || this
      .keyPressed !== 'Backspace') {
      const numChars = e.target.value.length;
      if (numChars === 2 || numChars === 5) {
        let thisVal = e.target.value;
        thisVal += '/';
        e.target.value = thisVal;
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  keyDownEvent(event) {
    this.keyPressed = event.key;
  }
}
