import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import {ValidateService} from './services/validate.service';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {PostsService} from "./services/posts.service";
import { ShowPostsComponent } from './components/showposts/showposts.component';
import { EditPostComponent } from './components/editpost/editpost.component';
import { ShowByCategoryComponent } from './components/showbycategory/showbycategory.component';
import { ShowByAuthorComponent } from './components/showbyauthor/showbyauthor.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import {enableProdMode} from '@angular/core';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]  },
  {path: 'show/:id', component:ShowPostsComponent,canActivate:[AuthGuard]  },
  {path: 'edit/:id', component:EditPostComponent,canActivate:[AuthGuard]   },
  {path: 'show/category/:catname', component:ShowByCategoryComponent,canActivate:[AuthGuard]  },
  {path: 'show/author/:author', component:ShowByAuthorComponent,canActivate:[AuthGuard]  },
  {path: 'addpost', component:AddpostComponent,canActivate:[AuthGuard]  },
  {path: 'addcategory', component:AddcategoryComponent,canActivate:[AuthGuard]  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ShowPostsComponent,
    EditPostComponent,
    ShowByCategoryComponent,
    ShowByAuthorComponent,
    AddpostComponent,
    AddcategoryComponent,





  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,





  ],
  providers: [ValidateService,AuthService,AuthGuard,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
