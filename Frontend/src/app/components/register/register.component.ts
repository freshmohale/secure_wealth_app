import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private userauth: UserauthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isSuccessful = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { firstName, lastName, email, password, confirmPassword } = this.form;
    //This Method That Returns An Observable Object (authService.register())
    this.userauth
      .register(firstName, lastName, email, password, confirmPassword)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.roles = this.tokenStorage.getUser().roles;
          window.location.replace('/regwelcome');
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        },
      });
  }
}
