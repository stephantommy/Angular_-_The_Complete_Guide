import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  // @Output() -> will create custom event, with the name of the internal property
  // @Output('alias') -> will create custom event with custom name
  @Output("servercreated") serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("blueprintcreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // @ViewChild('*local reference') -> create a variable of an html element
  // add { static: true } as a second argument of @ViewChild() and also @ContentChild() (which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit()
  @ViewChild("serverContentInput") serverContentInput: ElementRef;

  // newServerName = "";
  // newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput);
    this.serverCreated.emit({
      // serverName: this.newServerName,
      // serverContent: this.newServerContent,
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      // serverContent: this.newServerContent,
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
