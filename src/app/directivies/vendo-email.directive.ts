import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appVendoEmail]'
})
export class VendoEmailDirective {

  @Input('appVendoEmail') color: string = 'green'



  @HostListener('mouseenter') onEnter()
  {

    const sibling = this.r.nextSibling(this.element.nativeElement)
    this.r.setStyle(sibling, 'display','block')

  }
  @HostListener('mouseleave') onLeave()
  {
    const sibling = this.r.nextSibling(this.element.nativeElement)
    this.r.setStyle(sibling, 'display','none')

  }
  constructor(private element:ElementRef, private r: Renderer2) { }

}
