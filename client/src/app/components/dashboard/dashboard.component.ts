import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit {
  post:any;
  constructor(private auth:AuthService, private router:Router, private posts:PostsService) { }

  ngOnInit() {
    this.posts.getPosts().subscribe(posts => {


        this.post = posts.data;        },
        err => {
          console.log(err);
          return false;
        });
  }

}
