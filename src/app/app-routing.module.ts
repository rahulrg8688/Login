import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
