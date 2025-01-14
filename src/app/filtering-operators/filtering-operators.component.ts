import { Component } from '@angular/core';
import { of } from 'rxjs';
import { filter, take, debounceTime } from 'rxjs/operators';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtering-operators',
  templateUrl: './filtering-operators.component.html',
  styleUrls: ['./filtering-operators.component.css'],
  imports:[CommonModule,FormsModule]
})
export class FilteringOperatorsComponent {
  observableOutput: string[] = [];

  createFilter() {
    this.observableOutput = [];
    const observable = of(1, 2, 3, 4, 5).pipe(
      filter(value => value % 2 === 0)
    );
    observable.subscribe(value => this.observableOutput.push(`filter: ${value}`));
  }

  createTake() {
    this.observableOutput = [];
    const observable = of(1, 2, 3, 4, 5).pipe(
      take(3)
    );
    observable.subscribe(value => this.observableOutput.push(`take: ${value}`));
  }

  createDebounceTime() {
    this.observableOutput = [];
    const observable = of(1, 2, 3, 4, 5).pipe(
      debounceTime(1000)
    );
    observable.subscribe(value => this.observableOutput.push(`debounceTime: ${value}`));
  }
}