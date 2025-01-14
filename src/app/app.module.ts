import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CreationOperatorsComponent,
    TransformationOperatorsComponent,
    FilteringOperatorsComponent,
    CombinationOperatorsComponent,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
