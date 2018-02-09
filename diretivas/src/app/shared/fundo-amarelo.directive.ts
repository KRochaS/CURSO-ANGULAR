import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
  // selector: 'p[fundoAmarelo]' para ser aplicada apenas em tags p 
  // Pode aplicar em qualquer tag 
})
export class FundoAmareloDirective {


  constructor(
    private ElementRef: ElementRef,
    private Renderer: Renderer
  ) {
   // console.log(this.ElementRef);
   // this.ElementRef.nativeElement.style.backgroundColor = 'yellow';
   this.Renderer.setElementStyle(
     this.ElementRef.nativeElement,
     'background-color',
     'yellow'
    )
   }

}
