import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostsService} from "../../services/posts.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-showbycategory',
  templateUrl: './showbycategory.component.html',

})
export class ShowByCategoryComponent implements OnInit,OnDestroy {
  catname: string;
  private sub: any;
  postData:Object;
  user:Object;
  dPost:any;


  constructor(private route:ActivatedRoute, private post: PostsService, private auth: AuthService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.catname = params['catname']; // (+) converts string 'id' to a number


    });

    this.post.getPostsByCatName(this.catname).subscribe(posts => {

          this.auth.getProfile().subscribe(profile => {
                this.user = profile.user;
                this.postData = posts.data;

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

  deletePost(postId,userId) {
    this.auth.getProfile().subscribe(profile => {
          if(profile.user._id == userId) {
            this.post.deletePost(postId).subscribe(post => {


              this.dPost = post;
              console.log(post);


            }, err => {
              console.log(err);
              return false;
            });
          } else {
            console.log('Unauthorized !');
            return false;
          }
        },
        err => {
          console.log(err);
          return false;
        });

  }




  ngOnDestroy() {
    this.sub.unsubscribe();
  }






}




