import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CinemaComponent } from './cinema/cinema.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { LoginComponent } from './login/login.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AuthGuard } from './shared/auth.guard';
import { TenttiComponent } from './tentti/tentti.component';



const appRoutes: Routes = [
  { path: 'helloworld', component: HelloworldComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'cinema', component: CinemaComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'tentti', component: TenttiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )],

  exports: [RouterModule]
})
export class AppRoutingModule { }
