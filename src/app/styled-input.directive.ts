import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[StyledInput]'
})
export class StyledInputDirective {

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2 
  ) { 
    this.el.nativeElement.style.backgroundColor = 'lightgray'

    this.renderer.setStyle(this.el.nativeElement, 'width', '430px')
    this.renderer.setStyle(this.el.nativeElement, 'height', '30px')
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '3px')
    this.renderer.setStyle(this.el.nativeElement, 'border-style', '1px')
  }
}