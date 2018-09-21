import { Component } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../post.service";
import { Route } from "@angular/compiler/src/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from 'rxjs/operators';


@Component({
    moduleId: module.id,
    selector: 'view-post',
    templateUrl: "view.post.component.html",
    styleUrls: ['view.post.component.css']
})
export class ViewPostComponent{
    post:Post;

    constructor(private postServive: PostService, private router: Router,  private route: ActivatedRoute){
    }
    
    //get the data from the activated rout and show it to the user
    ngOnInit(): void {
        this.route.data.subscribe( ({post}) => {
            this.post = post[0];
        });
    }
    
}