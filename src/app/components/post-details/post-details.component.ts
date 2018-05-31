import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../domain/ipost';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  idPost:number;
  post:IPost;

  constructor(private activatedRoute:ActivatedRoute,private _service:PostsService) { }

  ngOnInit() {
    this.idPost=+this.activatedRoute.snapshot.params['id'];
    //Using Observable
    //this.avtivatedRoute.subscribe(parameters => this.idPost = parameters['id']);
    this._service.findById(this.idPost).subscribe(data=>{
      this.post = data;
      console.log(this.post);
    },err=>{
      console.log(err);
    })

  }


}
