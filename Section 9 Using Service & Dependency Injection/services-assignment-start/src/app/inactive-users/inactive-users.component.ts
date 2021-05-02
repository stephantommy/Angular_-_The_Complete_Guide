import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inActiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setUserToActive(id);
  }
}
