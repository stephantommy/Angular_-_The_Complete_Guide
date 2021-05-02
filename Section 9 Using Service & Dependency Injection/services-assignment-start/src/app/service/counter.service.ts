import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  activeToInactiveCounter: number = 0;
  emitActiveToInactiveCounter: EventEmitter<number> = new EventEmitter<number>();

  inactiveToActiveCounter: number = 0;
  emitInactiveToActiveCounter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  countActiveToInactive() {
    this.activeToInactiveCounter++;
    this.emitActiveToInactiveCounter.emit(this.activeToInactiveCounter);
  }

  countInactiveToActive() {
    this.inactiveToActiveCounter++;
    this.emitInactiveToActiveCounter.emit(this.inactiveToActiveCounter);
  }
}
