import { Directive, ElementRef, OnInit } from "@angular/core";

// to create a custom directive, use @Directive annotation
// the selector for directive must have "[]" around the name, so it will be recognize when added to an element (without "[]")
@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  // to get access to the element this directive sits on, we need to inject the element the directive sits on into this directive.
  constructor(private element: ElementRef) {}

  ngOnInit() {
    // accessing and changing an html element like below is not recommended
    this.element.nativeElement.style.backgroundColor = "green";
  }
}
