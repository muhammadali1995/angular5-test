import { Component } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Component({
    selector: 'post',
    templateUrl: "post.component.html",
    styleUrls: ['post.component.css']
})
export class PostComponent{
    //array to hold all the psts
    posts: Post [] = []

    constructor(private postService: PostService){
        
    }
    ngOnInit(): void {
        //one the view is created, it will show the date
        this.getAll();
    }

    // brings all the posts from database and shows it to the user
    getAll() {
        this.postService.getAll().subscribe(posts => {
            this.posts = posts;
        });
    }
    // delete a post
    // if the user confirms that he want to delete the post it will delete from database
    delete(post){
        if(confirm("Do you really want to delete?")){
            this.postService.delete(post.id).subscribe(response=> {
                if(response){
                    this.posts.splice(this.posts.indexOf(post), 1);
                }
            })
        }
        
    }
}