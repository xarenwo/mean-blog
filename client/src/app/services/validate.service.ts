import { Injectable } from '@angular/core';


@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
      return false;
    }  else {
      return true;

    }
  }

  validatePost(post) {
    if(post.title === undefined || post.category === undefined || post.body === undefined) {
      return false;
    }  else {
      return true;

    }
  }
  validateCategory(category) {
    if(category.name === undefined || category.createdBy === undefined) {
      return false;
    }  else {
      return true;

    }
  }

  validateLogin(user) {
    if(user.username === undefined || user.password === undefined) {
      return false;
    }  else {
      return true;

    }
  }
  validateUpdate(post) {
    if(post.title === undefined || post.category === undefined || post.body === undefined) {
      return false;
    }  else {
      return true;

    }
  }


  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
