import { Component } from '@angular/core';
import { of, combineLatest, merge, forkJoin } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-combination-operators',
  templateUrl: './combination-operators.component.html',
  styleUrls: ['./combination-operators.component.css'],
  imports:[CommonModule,FormsModule]
})
export class CombinationOperatorsComponent {
  observableOutput: string[] = [];

  createCombineLatest() {
    this.observableOutput = [];
    const observable1 = of(1, 2, 3);
    const observable2 = of('A', 'B', 'C');
    combineLatest([observable1, observable2]).subscribe(([num, char]) => {
      this.observableOutput.push(`combineLatest: ${num} - ${char}`);
    });
  }

  createMerge() {
    this.observableOutput = [];
    const observable1 = of(1, 2, 3);
    const observable2 = of('A', 'B', 'C');
    merge(observable1, observable2).subscribe(value => {
      this.observableOutput.push(`merge: ${value}`);
    });
  }

  createForkJoin() {
    this.observableOutput = [];
    const observable1 = of(1, 2, 3);
    const observable2 = of('A', 'B', 'C');
    forkJoin([observable1, observable2]).subscribe(value => {
      this.observableOutput.push(`forkJoin: ${JSON.stringify(value)}`);
    });
  }
}