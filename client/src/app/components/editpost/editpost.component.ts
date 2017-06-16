import {Component, NgModule, OnDestroy, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from "../../services/posts.service";
import {AuthService} from "../../services/auth.service";
import {ValidateService} from "../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {BrowserModule} from "@angular/platform-browser";

@NgModule ({
  imports: [BrowserModule]
})
@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',

})
export class EditPostComponent implements OnInit,OnDestroy {
  id: number;
  private sub: any;
  postData:Object;
  user:Object;
  newUser:Object;
  categories:any;


  title:String;
  category:String;
  body:String;

  constructor(private route:ActivatedRoute,
              private post: PostsService,
              private auth: AuthService,
              private validateService:ValidateService,
              private flashMessage:FlashMessagesService,
              private router:Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

    this.post.getPostById(this.id).subscribe(posts => {

          this.auth.getProfile().subscribe(profile => {

            this.post.getCategories().subscribe(categories => {
                  this.user = profile.user;
                  this.id = posts.data._id;
                  this.postData = posts.data;
                  this.categories = categories.data;
                  this.body = posts.data.body;
                  this.category = posts.data.category;
                  this.title = posts.data.title;
                  console.log(categories.data);
                  },
                err => {
                  console.log(err);
                  return false;
                });

              },
              err => {
                console.log(err);
                return false;
              });

        },
        err => {
          console.log(err);
          return false;
        });

  }

  onSaveSubmit(event) {

    event.preventDefault();
    var newPost = {
      postId: this.id,
      title: this.title,
      category: this.category,
      body: this.body,
    };


    //Required fields
    if(!(this.validateService.validateUpdate(newPost))) {
      this.flashMessage.show('Please fill in all fields !',{cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

       //Register user
    this.post.updatePost(newPost).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('Your post has been updated !', {cssClass:'alert-success', timeout:3000});
        this.router.navigate(['/show/'+newPost.postId]);
      }else {
        this.flashMessage.show('Something went wrong !', {cssClass:'alert-danger', timeout:3000});
      }
    });




  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}

