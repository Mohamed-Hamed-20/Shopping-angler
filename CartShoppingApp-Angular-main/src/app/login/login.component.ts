import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  loginUser(form: any) {
    console.log(form);
    console.log(form.value);
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      if (
        this.loginData.email === userData.email &&
        this.loginData.password === userData.password
      ) {
        const token = this.generateToken();
        localStorage.setItem('authToken', token);
        this.router.navigate(['/']);
      } else {
        alert('Invalid email or password!');
      }
    } else {
      alert('No user found. Please register first!');
    }
  }

  private generateToken(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}
