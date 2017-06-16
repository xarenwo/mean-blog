import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
@Injectable()
export class PostsService {
  authToken:any;
  user:any;
  delOptions:any;
  headers:any;
  constructor(private http:Http) {  }
  getPosts() {
    let headers = new Headers();

    this.loadToken(); // load the token from local storage
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.get('http://localhost/posts/get',  {headers:headers})
        .map(res => res.json());
  }


  getPostById(id) {
    let headers = new Headers();

    this.loadToken(); // load the token from local storage
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.get('http://localhost/posts/get/id/'+id,  {headers:headers})
        .map(res => res.json());
  }

  getPostsByCatName(catname) {
    let headers = new Headers();
    this.loadToken(); // load the token from local storage
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.get('http://localhost/posts/get/category/'+catname,  {headers:headers})
        .map(res => res.json());
  }

  getPostsByAuthor(author) {
    let headers = new Headers();

    this.loadToken(); // load the token from local storage
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.get('http://localhost/posts/get/author/'+author,  {headers:headers})
        .map(res => res.json());
  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getCategories() {
    let headers = new Headers();
    this.loadToken(); // load the token from local storage
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);

    return this.http.get('http://localhost/categories/get',  {headers:headers})
        .map(res => res.json());
  }


  updatePost(newPost) {
    let headers = new Headers();
    this.loadToken(); // load the token from local storage
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.post('http://localhost/posts/update', newPost, {headers:headers})
        .map(res => res.json());
  }

  addPost(newPost) {
    let headers = new Headers();
    this.loadToken(); // load the token from local storage
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.post('http://localhost/posts/add', newPost, {headers:headers})
        .map(res => res.json());
  }


  addCategory(newCategory) {
    let headers = new Headers();
    this.loadToken(); // load the token from local storage
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.post('http://localhost/categories/add', newCategory, {headers:headers})
        .map(res => res.json());
  }

  deletePost(postId) {

      this.headers = new Headers();
      this.loadToken();
      this.headers.append('Content-Type','application/json');
    this.headers.append('Authorization',this.authToken);
    this.delOptions = new RequestOptions({headers:this.headers});

      return this.http.delete('http://localhost/posts/delete/'+postId, this.delOptions).map(res => res.json());

  }

  deleteComment(postId,commentId,userId,commentAuthor) {
    this.headers = new Headers();
    this.loadToken();
    this.headers.append('Content-Type','application/json');
    this.headers.append('Authorization',this.authToken);
    this.delOptions = new RequestOptions({headers:this.headers});

    return this.http.delete('http://localhost/posts/comments/delete/'+postId+'/'+commentId, this.delOptions).map(res => res.json());
  }

  addcomment(newComment) {
    let headers = new Headers();
    this.loadToken(); // load the token from local storage
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authToken);
    return this.http.post('http://localhost/posts/addcomment', newComment, {headers:headers})
        .map(res => res.json());
  }




}

