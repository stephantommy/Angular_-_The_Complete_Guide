import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input("appBetterHighlight") defaultColor: string = "transparent";
  // @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

  // to bind to an property of an element this directive sits on, use @HostBinding('propertyname')
  @HostBinding("style.backgroundColor") backgroundColor: string;

  // using renderer is a better approach accessing and changing a DOM
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "blue"
    // );

    this.backgroundColor = this.defaultColor;
  }

  // to listen to an event of an element this directive sits on, use @HostListener('eventname')
  @HostListener("mouseenter") mouseEnter(eventData: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "blue"
    // );

    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseLeave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "transparent"
    // );

    this.backgroundColor = this.defaultColor;
  }
}
