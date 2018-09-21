import { NgModule } from "@angular/core";
import { PostRoutingModule } from "./post.routes";
import { PostComponent } from "./post.component";
import { PostService } from "./post.service";
import { ViewPostComponent } from "./view-post/view.post.component";
import { CommonModule } from "node_modules/@angular/common";
import { RouterLink, RouterModule } from "@angular/router";
import { CreatePostComponent } from "./create-post/create-post.component";
import { FormsModule } from "@angular/forms";
import { UpdatePostComponent } from "./update-post/update.post.component";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    PostRoutingModule,
  ],
  declarations: [
    PostComponent,
    ViewPostComponent,
    CreatePostComponent,
    UpdatePostComponent
  ],
  exports: [
      PostComponent,
      ViewPostComponent
  ],
  providers: [ 
      PostService,
     ]
})
export class PostModule {}

