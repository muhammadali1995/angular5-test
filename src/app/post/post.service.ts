import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from "./post.model";
import { Observable } from "../../../node_modules/rxjs";
import { catchError } from "../../../node_modules/rxjs/operators";

@Injectable({
    providedIn: 'root',
  })
export class PostService{
    constructor(private http: HttpClient){
    }
    //url to external api 
    private apiUrl = "https://jsonplaceholder.typicode.com/posts";
     httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'fdasf'
        })
    };

    //brings all the posts from the api and resturns it as an Obeservale of array of Posts
    getAll(){
       return this.http.get<Post[]>(this.apiUrl);       
    }

    // fetch the posts with the given id from API and return an Observale of Post Model
    findOne(id:string){
        const options = id ?
        { params: new HttpParams().set('id', id) } : {};
        return this.http.get<Post>(this.apiUrl,options);
    }

    //remove the post with the given id from the database
    delete(id: string){
        const url = `${this.apiUrl}/${id}`
       return this.http.delete(url); 
    }

    //add new post to the database and return an Observable of Object which holds the created post 
    create(post: Post): Observable<Object>{
       return this.http.post(this.apiUrl, post, this.httpOptions);
    }

    //update the post and return an observale of Object that holds the update post
    update(post: Post): Observable<Object> {
        const url = `${this.apiUrl}/${post.id}`
        return this.http.put<Post>(url, post, this.httpOptions);
    }



}