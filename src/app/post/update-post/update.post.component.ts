import { Component } from "@angular/core";
import { Post } from "../post.model";
import { Observable } from "rxjs";
import { PostService } from "../post.service";
import { ActivatedRoute } from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'update-post',
    templateUrl: "../create-post/create-post.component.html"
})
export class UpdatePostComponent{
    post: Post;
    submitted = false;
    message = "Updated Successfully"
    title= "Update Post"
    constructor(private postService: PostService, private route: ActivatedRoute){}

    //first fetch the latest version of the post from data base and equalize it to the post and pass it to the form
    ngOnInit(): void {
        this.route.data.subscribe( ({post}) => {
            this.post = post[0];
        });
    }

    // update the post and close the model and show the message that the post is sucessully updated
    update(post: Post){
        return this.postService.update(post).subscribe(post=> {
            if(post){
                this.submitted = true;
            }
        })
     }

     onSubmit(){
         this.update(this.post);
     }

}