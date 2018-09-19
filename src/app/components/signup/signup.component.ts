import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form = {
    first_name: null,
    last_name: null,
    email: null,
    state: null,
    number: null,
    altnumber: null,
    country: null,
    address: null,
    password: null,
    password_confirmation: null
};

public error  = [];

  constructor(private auth: AuthService,
              private token: TokenService,
              private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit() {
      this.auth.signup(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/');
}

  handleError(error) {
    this.error = error.error.errors;
}

}
