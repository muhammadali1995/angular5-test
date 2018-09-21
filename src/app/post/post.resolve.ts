import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { PostService } from "./post.service";
import { Observable } from "rxjs";
import { Post } from "./post.model";
import { take, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
@Injectable()
export class PostResolver implements Resolve<any>{
    constructor(private postService: PostService){}

    // methods makes user that it brings the data before the route is activated
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post>{
        
        const id= route.paramMap.get('id');
        // find the post with the given id and wait a second and return the post
        return this.postService.findOne(id).pipe(
            take(1),
            map(post => {
                if(post){
                    return post;
                }
            })
        );

    }

}
