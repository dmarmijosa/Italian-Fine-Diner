import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  constructor(private router:Router){}
  redireccionar(){
    window.open('https://adminlte.io/themes/v3/pages/tables/simple.html');
  }
}
