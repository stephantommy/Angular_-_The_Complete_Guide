import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

import { ServersService } from "../servers.service";
import {
  CanComponentDeactivate,
  CanDeactivateGuard,
} from "./can-deactivate-guard.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm("Do you want to discard the changes?");
    }
    return true;
  }

  ngOnInit() {
    console.log("queryParam : ", this.route.snapshot.queryParams);
    console.log("fragment : ", this.route.snapshot.fragment);

    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params["allowEdit"] === "1" ? true : false;
    });

    this.server = this.serversService.getServer(
      +this.route.snapshot.params["id"]
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
