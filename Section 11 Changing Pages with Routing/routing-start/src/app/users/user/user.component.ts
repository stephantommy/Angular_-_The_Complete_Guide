import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.activatedRoute.snapshot.params["id"],
      name: this.activatedRoute.snapshot.params["name"],
    };

    this.subscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.user = {
          id: params["id"],
          name: params["name"],
        };
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
