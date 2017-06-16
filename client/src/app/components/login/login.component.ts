import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {ValidateService} from "../../services/validate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;


  constructor(private auth: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService,
  private validateService:ValidateService) { }

  ngOnInit() {
  }

  onLoginSubmit(event) {
    event.preventDefault();
    var user = {
      username: this.username,
      password: this.password
    };


    if(!(this.validateService.validateLogin(user))) {
      this.flashMessage.show('Please fill in all fields !',{cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.auth.authenticateUser(user).subscribe(data => {

      if(data.success == true) {
        this.auth.storeUserData(data.token,data.user);
        this.flashMessage.show('You are now logged in !', {cssClass: 'alert-success',timeout:3000});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show('Some error', {cssClass: 'alert-success',timeout:3000});
        this.router.navigate(['/login']);
      }

    });


  }

}
