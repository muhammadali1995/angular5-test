import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './view-post/view.post.component';
import { PostComponent } from './post.component';
import { PostResolver } from './post.resolve';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update.post.component';

//list of paths and assigned components
const postRoutes: Routes = [
  { path: '',  component: PostComponent },
  //PostResolver makes sure that the data will be fetched first before the route is activated
  { path: 'post/:id', component: ViewPostComponent,
    resolve: {
        post: PostResolver  
    }
  },
  {
      path: "create", component: CreatePostComponent
  },
  {
    path: "update/:id", component: UpdatePostComponent,
    resolve: {
        post: PostResolver  
    }
  }  

];

@NgModule({
  imports: [
    RouterModule.forRoot(postRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule { }


