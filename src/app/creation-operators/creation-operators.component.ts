import { Component } from '@angular/core';
import { of, from, interval, timer, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { log } from 'console';


@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CreationOperatorsComponent {
  observableOutput: string[] = [];

  createOf() {
    console.log('Button clicked!');
    this.observableOutput = [];
    const observable = of(1, 2, 3, 4, 5);
    observable.subscribe(value => this.observableOutput.push(`of: ${value}`));
  }

  createFrom() {
    this.observableOutput = [];
    const observable = from([10, 20, 30]);
    observable.subscribe(value => this.observableOutput.push(`from: ${value}`));
  }

  createInterval() {
    this.observableOutput = [];
    const observable = interval(1000).pipe(take(5));
    observable.subscribe(value => this.observableOutput.push(`interval: ${value}`));
  }

  createTimer() {
    this.observableOutput = [];
    const observable = timer(2000);
    observable.subscribe(value => this.observableOutput.push(`timer: 2s`));
  }
}