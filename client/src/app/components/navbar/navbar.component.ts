import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private flashMessage:FlashMessagesService, private router:Router ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.auth.logout();
    this.flashMessage.show('You have been logged out !',{cssClass:'alert-info', timeout:3000});

    this.router.navigate(['/login']);
    return false;
  }

}
