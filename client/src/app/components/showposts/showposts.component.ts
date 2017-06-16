import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from "../../services/posts.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',

})
export class ShowPostsComponent implements OnInit,OnDestroy {
  id: number;
  private sub: any;
  postData:Object;
  user:Object;
  dPost:any;
  dComment:any;
  commentName:any;
  commentEmail:any;
  commentBody:any;


  constructor(private route:ActivatedRoute, private post: PostsService, private auth: AuthService,private router:Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

    this.post.getPostById(this.id).subscribe(posts => {

          this.auth.getProfile().subscribe(profile => {
              console.log(profile);

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

  onAddComment(postId) {
      this.auth.getProfile().subscribe(profile => {

              console.log(this.commentBody);
              event.preventDefault();
              var newComment = {
                  postId:postId,
                  name:this.commentName,
                  email:this.commentEmail,
                  body:this.commentBody,
                  commentAuthor:profile.user.username
              };
              this.post.addcomment(newComment).subscribe(data => {


               location.reload();


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
                    if(post.success) {
                        this.router.navigate(['/dashboard']);
                    }



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

    deleteComment(postId,commentId,userId,commentAuthor) {
        this.auth.getProfile().subscribe(profile => {

                if(profile.user._id == userId || profile.user.username == commentAuthor) {
                    this.post.deleteComment(postId, commentId, userId,commentAuthor).subscribe(comment => {


                        this.dComment = comment;
                        console.log(comment);

                        location.reload();



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




