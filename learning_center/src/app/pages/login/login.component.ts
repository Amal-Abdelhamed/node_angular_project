import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: User = {
    code: '',
    password: ''
  }
  msgErr = null
  constructor(private global: GlobalService, private router: Router) { }
  handleSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.global.getLogin(this.model).subscribe(res => {
        if (res.apiStatus) this.router.navigateByUrl('')
      }, (e) => {
        this.msgErr = e.error.data
      }, () => {

      }
      )
    }

  }
}
