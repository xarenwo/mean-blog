import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  author: any;
  private sub: any;
  postData:Object;
  user:any;
  dPost:any;
  batteryStatus:any;
  constructor(private auth:AuthService, private router:Router,private post:PostsService) { }

  ngOnInit() {

    this.auth.getProfile().subscribe(profile => {

          this.user = profile.user;
          this.post.getPostsByAuthor(this.user.username).subscribe(posts => {




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

}
