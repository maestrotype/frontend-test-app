import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {Step1Module} from './registration/step1/step1.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
        {
          path: '',
          redirectTo: 'step1',
          pathMatch: 'full'
        },
      {
        path: 'step1',
        loadChildren: './registration/step1/step1.module#Step1Module'
      },
      {
        path: 'step2',
        loadChildren: './registration/step2/step2.module#Step2Module'
        // canActivate: [AuthGuard]
      }
      ,
      {
        path: '**',
        redirectTo: 'step1'
      }
    ]
  },
  {
    path: '**', redirectTo: 'step1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
