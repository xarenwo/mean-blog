import { Component, OnInit } from '@angular/core';
import {ValidateService } from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";



@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
})
export class AddcategoryComponent implements OnInit {
  name: String;
  createdBy:String;
  user:any
  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router:Router,
  private post:PostsService) { }

  ngOnInit() {
  }

  onAddCategory(event) {
    event.preventDefault();


    this.authService.getProfile().subscribe(profile => {



    this.user = profile;
    console.log(this.user);
    this.createdBy = this.user.user.username;
          var newCategory = {
            name: this.name,
            createdBy: this.createdBy
          };
    //Required fields
    if(!(this.validateService.validateCategory(newCategory))) {
      this.flashMessage.show('Please fill in all fields !',{cssClass: 'alert-danger', timeout: 3000});
      return false;
    }


    //Register user
    this.post.addCategory(newCategory).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('Your category has been added !', {cssClass:'alert-success', timeout:3000});
        this.router.navigate(['/dashboard']);
      }else {
        this.flashMessage.show('Something went wrong !', {cssClass:'alert-danger', timeout:3000});
        this.router.navigate(['/addcategory']);
      }
    });

        },
        err => {
          console.log(err);
          return false;
        });




  }
}
