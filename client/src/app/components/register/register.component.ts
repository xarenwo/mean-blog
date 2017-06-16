import { Component, OnInit } from '@angular/core';
import {ValidateService } from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(event) {
    event.preventDefault();
    var newUser = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };


    //Required fields
    if(!(this.validateService.validateRegister(newUser))) {
      this.flashMessage.show('Please fill in all fields !',{cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    if(!(this.validateService.validateEmail(newUser.email))) {

      this.flashMessage.show('Email is not valid !',{cssClass: 'alert-danger', timeout: 3000});
    }

    //Register user
    this.authService.registerUser(newUser).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('You are now registered and can log in !', {cssClass:'alert-success', timeout:3000});
        this.router.navigate(['/login']);
      }else {
        this.flashMessage.show('Something went wrong !', {cssClass:'alert-danger', timeout:3000});
        this.router.navigate(['/register']);
      }
    });




  }
}
