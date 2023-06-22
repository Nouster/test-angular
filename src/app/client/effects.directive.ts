import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEffects]',
})
export class EffectsDirective {
  @Input('appEffects')
  color = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background = this.color;
    this.el.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseover')
  onMouseOver(event: MouseEvent): void {
    this.el.nativeElement.style.backgroundColor = 'blue';
    this.el.nativeElement.style.color = 'white';
  }

  @HostListener('mouseout')
  onMouseOut(event: MouseEvent): void {
    this.el.nativeElement.style.background = this.color;
    this.el.nativeElement.style.color = '';
  }
}
