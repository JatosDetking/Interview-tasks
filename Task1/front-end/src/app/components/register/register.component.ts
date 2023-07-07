import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerServerRegistrationMessage?: string = undefined

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
  selectedRole = 'user';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  register() {
    this.userService.register(this.usernameControl.value!, this.passwordControl.value!, this.selectedRole).subscribe((res: any) => {
        this.registerServerRegistrationMessage = res.message; 
    },(err)=>{
      this.registerServerRegistrationMessage = err.error.message;
    })
  }
}
