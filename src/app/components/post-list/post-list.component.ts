import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../domain/ipost';
import { Observable } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  animations: [routerTransition()]

})
export class PostListComponent implements OnInit {

  pageData:IPost[];
  constructor(private _service:PostsService) { }

  ngOnInit() {

     //Liste des Postes
     this._service.getPosts()
     .subscribe(data=>{
       this.pageData=data;
     },err=>{
       console.log(err);
     })


  }



}
