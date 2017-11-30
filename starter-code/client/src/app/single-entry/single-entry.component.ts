import { Component, OnInit } from '@angular/core';
import {PostServiceService} from '../services/post-service.service';

import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  post:any;
  constructor(
    public router:Router,
    public postService:PostServiceService,
    public route:ActivatedRoute) {
    route.params.subscribe(params => {
      this.postService.getPostByID(params['id'])
        .subscribe(post => this.post = post);
    })
  }

  deletePhone(id){
    this.postService.deletePost(id).subscribe(() =>{
      this.router.navigate(['']);
    });
  }

  ngOnInit() {
  }

}
