import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseover() {
    // this.Renderer.setElementStyle(
    //   this.ElementRef.nativeElement,
    //   'background-color', 'yellow'
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onmouseLeave() {
    // this.Renderer.setElementStyle(
    //   this.ElementRef.nativeElement,
    //   'background-color', 'white'
    this.backgroundColor = 'white';
  }

 // @HostBinding('style.backgroundColor') backgroundColor: string;
 @HostBinding('style.backgroundColor') get setColor(){
   //código extra caso precisa seguir manipulando
   return this.backgroundColor;
 }
   private backgroundColor: string;


  constructor(
    // private ElementRef: ElementRef,
    // private Renderer: Renderer
  ) {

   }

}
