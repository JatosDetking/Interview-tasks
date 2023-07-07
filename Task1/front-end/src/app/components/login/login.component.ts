import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginServerRegistrationMessage = undefined

  usernameControl = new FormControl(null, [
    Validators.minLength(4),
    Validators.maxLength(20),
    Validators.required,
  ])

  passwordControl = new FormControl(null, [
    Validators.minLength(4),
    Validators.maxLength(20),
    Validators.required,
  ])

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
     this.userService.login(this.usernameControl.value!,this.passwordControl.value!).subscribe((res:any)=>{
       this.loginServerRegistrationMessage = res.message;
       if(res.status != 'denied'){
        this.router.navigate(['services'])
       }
     },(err)=>{
      this.loginServerRegistrationMessage = err.error.message
    })
  }
}
