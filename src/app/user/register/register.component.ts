import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ValidatorFn, AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': 
      { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../userforms.css']
})

export class RegisterComponent implements OnInit {
  public user: FormGroup;

  constructor(private authenticationService: AuthenticationService, private router: Router, private fb: FormBuilder) { }

  get passwordControl(): FormControl {
    return <FormControl>this.user.get('passwordGroup').get('password');
  }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)], 
        this.serverSideValidateUsername()],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(4)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords })
    });
  }

  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): 
      Observable<{ [key: string]: any }> => {
      return this.authenticationService.
        checkUserNameAvailability(control.value).map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    };
  }

  onSubmit() {
    this.authenticationService.register(this.user.value.username, this.passwordControl.value).subscribe(val => {
      if (val) {
        this.router.navigate(['/home']);
      }
    });
  }
}
