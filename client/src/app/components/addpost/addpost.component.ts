import {Component, ElementRef, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {ValidateService} from "../../services/validate.service";
import {AuthService} from "../../services/auth.service";
import {PostsService} from "../../services/posts.service";
import {Http} from "@angular/http";
import {MultipartItem} from "../../plugins/multipart-upload/multipart-item";
import {MultipartUploader} from "../../plugins/multipart-upload/multipart-uploader";

const URL = '/posts/add';



@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
    private uploader:MultipartUploader = new MultipartUploader({url: URL});
    multipartItem:MultipartItem = new MultipartItem(this.uploader);


  categories:any;
  newPost:Object;
  user:any;


  title:any;
  category:any;
  body:any;
author:any;
    upload : () => void;
    uploadCallback : (data) => void;
    file:File;

  constructor(private route:ActivatedRoute,
              private post: PostsService,
              private auth: AuthService,
              private validateService:ValidateService,
              private flashMessage:FlashMessagesService,
              private router:Router,
              private http:Http,

    ) {


  }

  ngOnInit() {



          this.auth.getProfile().subscribe(profile => {

                this.post.getCategories().subscribe(categories => {
                      this.user = profile.user;
                      this.categories = categories.data;
                    this.author = this.user.username;
                        this.upload = () => {

                            if (null == this.file || null == this.title || null == this.category || null == this.author|| null == this.body){
                                console.error("addpost.ts & upload() form invalid.");
                               var errx = 'Invalid data entered !';
                                this.flashMessage.show(errx, {cssClass: 'alert-danger',timeout:3000});
                                return;
                            }
                            if (this.multipartItem == null){
                                this.multipartItem = new MultipartItem(this.uploader);
                            }
                            if (this.multipartItem.formData == null)
                                this.multipartItem.formData = new FormData();

                            this.multipartItem.formData.append("title",  this.title);
                            this.multipartItem.formData.append("category",  this.category);
                            this.multipartItem.formData.append("body",  this.body);
                            this.multipartItem.formData.append("author",  this.user.username);

                            this.multipartItem.formData.append("image",  this.file);

                            this.multipartItem.callback = this.uploadCallback;
                            this.multipartItem.upload();
                        }

                        this.uploadCallback = (data) => {

                            var xaren = JSON.parse(data);



                            this.file = null;
                            if (xaren.success){

                                this.flashMessage.show(xaren.msg, {cssClass: 'alert-success',timeout:3000});
                                this.router.navigate(['/show',xaren.data._id]);

                            }else{
                                console.error("addpost.ts & uploadCallback() upload file false.");
                                this.flashMessage.show('There has been an error, try again !', {cssClass: 'alert-danger',timeout:3000});
                            }
                        }



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

/*

  onAddPostSubmit(event) {


     console.log(this.newPost);









      if(!(this.validateService.validatePost(this.newPost))) {
          this.flashMessage.show('Please fill in all fields !',{cssClass: 'alert-danger', timeout: 3000});
          return false;
      }


      this.post.addPost(this.newPost).subscribe(data => {
          if(data.success) {
              this.flashMessage.show('Your post has been added successfully !', {cssClass:'alert-success', timeout:3000});
              console.log(data);
             // this.router.navigate(['/login']);
          }else {
              this.flashMessage.show('Something went wrong !', {cssClass:'alert-danger', timeout:3000});
              //this.router.navigate(['/register']);
          }
      });





  }
*/



    selectFile($event) {

        var inputValue = $event.target;
        if( null == inputValue || null == inputValue.files[0]){
            console.debug("Input file error.");
            return;
        }else {
            this.file = inputValue.files[0];
            console.log('Selected : ' + this.file.name + ' of size ' + this.file.size);
            console.debug("Input File name: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
        }

    }




}
