import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostsService} from "../../services/posts.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-showbyauthor',
  templateUrl: './showbyauthor.component.html',

})
export class ShowByAuthorComponent implements OnInit,OnDestroy {
  author: any;
  private sub: any;
  postData:Object;
  user:Object;
  dPost:any;


  constructor(private route:ActivatedRoute, private post: PostsService, private auth: AuthService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.author = params['author'];


    });
     console.log(this.author);
    this.post.getPostsByAuthor(this.author).subscribe(posts => {

          this.auth.getProfile().subscribe(profile => {
                this.user = profile.user;
                this.postData = posts.data;
            console.log(this.postData);
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






  ngOnDestroy() {
    this.sub.unsubscribe();
  }






}




