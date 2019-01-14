import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step2Component } from './step2.component';
import { Step2RoutingModule } from './step2-routing.module';

@NgModule({
  exports: [ Step2Component ],
  declarations: [ Step2Component ],
  imports: [
    CommonModule,
    Step2RoutingModule
  ]
})
export class Step2Module { }
