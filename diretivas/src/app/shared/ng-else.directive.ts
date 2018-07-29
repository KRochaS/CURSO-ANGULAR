import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {
// escutar o ngElse toda vez que ele for (set)ado (modificado)
@Input() set ngElse(condition: boolean) {

  if(!condition) {
    this._viewContainerRef.createEmbeddedView(this._templateRef)
  } else {
    this._viewContainerRef.clear();
  }
}
  constructor(
    // Injeção de dependência
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { 
  }

}
