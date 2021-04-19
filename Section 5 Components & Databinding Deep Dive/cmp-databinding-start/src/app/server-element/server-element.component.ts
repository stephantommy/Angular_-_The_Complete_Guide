import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
// View Encapsulation: to encapsulate the css style of each component
// - ViewEncapsulation.Emulated  : default setting, adds an encapsulation
// - ViewEncapsulation.None      : removes the encapsulation, making the css file global
// - ViewEncapsulation.ShadowDOM : gives similar result with Emulated, but uses ShadowDOM technology, only supported by modern browser.
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // @Input() create a custom property
  // @Input() -> will create custom property with the name of the internal property
  // @Input('alias') -> will create custom property with custom name
  @Input("servervalue") element: {
    type: string;
    name: string;
    content: string;
  };
  @Input("description") description: string;
  @ViewChild("header", { static: true }) header: ElementRef;
  // @ContentChild is similar with @ViewChild, the only difference is @ContentChild is only for content
  @ContentChild("contentDescription", { static: true })
  contentDescription: ElementRef;

  constructor() {
    console.log("constructor called");
    // constructor run first
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log("changes :", changes);
    // at component initialization, ngOnChanges run first after constructor
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    // at component initialization, ngOnInit run after ngOnChanges

    console.log("header element: ", this.header.nativeElement.innerText);
    console.log(
      "contentDescription element: ",
      this.contentDescription.nativeElement.innerText
    );
    //  header and contentDescription element haven't created yet on ngOnInit
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
    // at component initialization, ngDoCheck run after ngOnInit
    // ngDoCheck executed on every change detection run (in otherwords, executed every time Angular check on any Changes)
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
    // at component initialization, ngDoCheck run after ngDoCheck
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
    // at component initialization, ngDoCheck run after ngAfterContentInit
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    // at component initialization, ngDoCheck run after ngAfterContentChecked

    console.log("header element: ", this.header.nativeElement.innerText);
    console.log(
      "contentDescription element: ",
      this.contentDescription.nativeElement.innerText
    );
    //  header and contentDescription element haven't created yet on ngOnInit
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
    // at component initialization, ngDoCheck run after ngAfterViewInit
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");
  }
}

/* 
Angular Lifecycle :
- ngOnInit              : called once the component is initialized
- ngOnChanges           : called every time a bound input (@Input) property changes
- ngDoCheck             : called during every change detection run
- ngAfterContentInit	  : called after content (ng-content) has been projected into view
- ngAfterContentChecked	: called every time the projected content has been checked
- ngAfterViewInit		    : called after the component'sView (and child views) has been initialized
- ngAfterViewChecked	  : called every time the view (and child views) have been checked
- ngOnDestroy		        : called once the component is about to be destroyed

 */
