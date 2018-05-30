import { Injectable } from '@angular/core';
import { IPost } from '../domain/ipost';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public http:HttpClient) { }

  getPosts(): Observable<IPost[]>
  {
          return this.http.get<IPost[]>("http://localhost:8080/api/posts");
  }


  getAllPosts():IPost[]{

return   [{
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita"
},
{
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi "
},
{
  "id": 3,
  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi"
}];

  }
}
