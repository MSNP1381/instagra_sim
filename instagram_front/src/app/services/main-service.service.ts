import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class MainServiceService {
    public static URL = 'http://localhost:8000';

    constructor(private http: HttpClient) {
    }

    public getPosts(): Observable<any> {
        return this.http.get(MainServiceService.URL + '/posts');
    }

    public getStories(): Observable<any> {
        return this.http.get(MainServiceService.URL + '/stories');
    }

    public likeUnlikePost(postId: number, likeOrUnlike: number): Observable<any> {
        return this.http.post(MainServiceService.URL + '/posts/like/' + postId, likeOrUnlike);
    }
  public createPost(data:any): Observable<any> {
    return this.http.post(MainServiceService.URL + '/posts/' , data);
  }
}
