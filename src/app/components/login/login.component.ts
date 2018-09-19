import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
      email: null,
      password: null
  };

  public error;


  constructor(private auth: AuthService,
              private token: TokenService,
              private router: Router,
              private authState: AuthStateService
      ) { }

  ngOnInit() {
  }

  onSubmit() {
      this.auth.login(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  handleResponse(data) {
      this.token.handle(data.access_token);
      this.authState.changeAuthStatus(true);
      this.router.navigateByUrl('/');
  }

  handleError(error) {
      this.error = error.error.error;
  }

}
