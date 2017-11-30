import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  posts:Array<any> = [];
  constructor(public postService:PostServiceService) {
    this.postService.getPostList().subscribe( list =>{
      this.posts = list;
    });
  }

  ngOnInit() {


  }

}
