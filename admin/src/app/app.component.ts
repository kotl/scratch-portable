import { Component, Input, Output, Inject } from '@angular/core';
import { LoginState, ApiClient } from './api.client';

import {API_BASE} from './constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output()
  state: LoginState = 'NOT_LOGGED_IN';
  title = 'CS First Offline Admin';

  @Input() password = 'test';
  @Output() error = '';
  @Input() newpassword = '';
  @Input() confirmpassword = '';

  constructor(
    private apiClient: ApiClient) {}
  onClick() {
    const password = this.password;
    const req = {
      username: 'admin',
      password,
    };
    this.apiClient.login(password)
    .then((status) => {
      this.state = status.state;
      this.error = status.error;
    });
  }

  onPasswordChanged() {
    this.state = 'LOGGED_IN';
  }
}
