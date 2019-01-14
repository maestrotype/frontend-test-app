import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1Component } from './step1.component';
import { Step1RoutingModule } from './step1-routing.module';

@NgModule({
  exports: [Step1Component],
  declarations: [Step1Component],
  imports: [
    CommonModule,
    Step1RoutingModule
  ]
})
export class Step1Module { }
