import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creation', component: CreationOperatorsComponent },
  { path: 'transformation', component: TransformationOperatorsComponent },
  { path: 'filtering', component: FilteringOperatorsComponent },
  { path: 'combination', component: CombinationOperatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }