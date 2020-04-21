import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string ;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "orange"
    // );
    this.backgroundColor= this.defaultColor;
  }

  @HostListener("click") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "orange",
    //   false,
    //   false
    // );
    this.backgroundColor=this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent",
    //   false,
    //   false
    // );
    this.backgroundColor=this.defaultColor;
  }
}
