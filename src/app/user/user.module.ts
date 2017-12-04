import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  exports: [
  ]
})
export class UserModule { }
