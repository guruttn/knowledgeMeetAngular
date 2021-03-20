import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { uris } from '../../environments/api-endpoints';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(uris.posts);
  }

  createPost(data: Post) {
    return this._http.post<Post>(uris.posts, data);
  }
}
