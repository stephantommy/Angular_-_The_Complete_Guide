import { Component, OnInit } from "@angular/core";
import { NumberValueAccessor } from "@angular/forms";
import { CounterService } from "./service/counter.service";
import { UserService } from "./service/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inActiveUsers: string[];
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inActiveUsers = this.userService.inActiveUsers;
    this.counterService.emitActiveToInactiveCounter.subscribe(
      (counter: number) => (this.activeToInactiveCounter = counter)
    );
    this.counterService.emitInactiveToActiveCounter.subscribe(
      (counter: number) => (this.inactiveToActiveCounter = counter)
    );
  }
}
