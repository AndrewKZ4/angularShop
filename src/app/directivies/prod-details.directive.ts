import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appProdDetails]'
})
export class ProdDetailsDirective {

  @Input('appProdDetails') set IfNot(f:boolean){
    if (!f){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
    else{
      this.viewContainer.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>,private  viewContainer:ViewContainerRef) { }

}
