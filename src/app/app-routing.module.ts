import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


const appRoutes: Routes = [
  { path: 'helloworld', component: HelloworldComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactiveform', component: ReactiveformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )],

  exports: [RouterModule]
})
export class AppRoutingModule { }
