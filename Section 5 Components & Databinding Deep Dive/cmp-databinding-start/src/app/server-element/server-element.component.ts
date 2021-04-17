import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  // @Input() create a custom property
  // @Input() -> will create custom property with the name of the internal property
  // @Input('alias') -> will create custom property with custom name
  @Input("servervalue") element: {
    type: string;
    name: string;
    content: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
