import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, switchMap, concatMap } from 'rxjs/operators';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-transformation-operators',
  templateUrl: './transformation-operators.component.html',
  styleUrls: ['./transformation-operators.component.css'],
  imports:[CommonModule,FormsModule]
})
export class TransformationOperatorsComponent {
  observableOutput: string[] = [];

  createMap() {
    this.observableOutput = [];
    const observable = of(1, 2, 3, 4, 5).pipe(
      map(value => value * 2)
    );
    observable.subscribe(value => this.observableOutput.push(`map: ${value}`));
  }

  createMergeMap() {
    this.observableOutput = [];
    const observable = of(1, 2, 3).pipe(
      mergeMap(value => of(value * 10))
    );
    observable.subscribe(value => this.observableOutput.push(`mergeMap: ${value}`));
  }

  createSwitchMap() {
    this.observableOutput = [];
    const observable = of(1, 2, 3).pipe(
      switchMap(value => of(value * 100))
    );
    observable.subscribe(value => this.observableOutput.push(`switchMap: ${value}`));
  }

  createConcatMap() {
    this.observableOutput = [];
    const observable = of(1, 2, 3).pipe(
      concatMap(value => of(value * 1000))
    );
    observable.subscribe(value => this.observableOutput.push(`concatMap: ${value}`));
  }
}