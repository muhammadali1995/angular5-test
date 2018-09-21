import { Component } from "../../../../node_modules/@angular/core";
import { Post } from "../post.model";
import { Observable } from "../../../../node_modules/rxjs";
import { PostService } from "../post.service";
@Component({
    moduleId: module.id,
    selector: 'create-post',
    templateUrl: "create-post.component.html"
})
export class CreatePostComponent{
     post: Post = new Post();
    submitted = false;
    message ="Create Successfully";
    title = "Create New Post";

    constructor(private postService: PostService){}
    
    //get the post from the from and create a new post in the database with create service
    create(post: Post){
        return this.postService.create(post).subscribe(post=> {
            if(post){
                this.submitted = true;
            }
        })
     }
     //once the form is submitted create a new post
     onSubmit(){
         this.create(this.post);
     }

}