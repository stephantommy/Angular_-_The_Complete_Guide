import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  activeUsers: string[] = ["Max", "Anna"];
  inActiveUsers: string[] = ["Chris", "Manu"];

  constructor(private counter: CounterService) {}

  setUserToActive(index: number) {
    this.activeUsers.push(this.inActiveUsers.splice(index, 1)[0]);
    this.counter.countInactiveToActive();
  }

  setUserToInactive(index: number) {
    this.inActiveUsers.push(this.activeUsers.splice(index, 1)[0]);
    this.counter.countActiveToInactive();
  }
}
