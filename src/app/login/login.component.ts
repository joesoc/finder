import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { LoggerService } from 'src/app/common/logging/logger.service';
import { AuthCommunityService } from './services/authcommunityservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public pageTitle = "Login";
  public LoginHeading = "Login to IDOL";
  public errorMessage = "";
  show_errorMessage = false;
  visible = true;
  logger;
  constructor(formBuilder: FormBuilder, logger: LoggerService, private authService: AuthCommunityService, private router: Router) { 
    this.logger = logger;
    this.loginForm = formBuilder.group({
      'username': [''],
      'password': ['']
    });
  }

  ngOnInit() {
  }


  reload(): void {
      this.visible = false;
      setTimeout(() => {
          this.visible = true;
      });
  }


  loginForm: FormGroup;

  get_usernameValue(): string {
      return this.loginForm.get('username').value;
  }

  get_passwordValue(): string {
      return this.loginForm.get('password').value;
  }

  login(){
      this.authService.login(this.get_usernameValue(), this.get_passwordValue()).subscribe(response =>{
        if(this.authService.isLoggedIn){
          this.router.navigate(['/Main']);
        }
        else{
          this.logger.log("Invalid Username isLoggedIn =  "+ this.authService.isLoggedIn);
          this.show_errorMessage = true;
          this.errorMessage = 'Incorrect Username or Password';
        }
      });
     

  }
}
