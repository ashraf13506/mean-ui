import { Component, OnInit } from '@angular/core';
import { CommentsServiceService } from 'src/app/SERVICES/comments-service.service';
import {take} from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commetsData:any;

  constructor(private _comment:CommentsServiceService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    let $subscribedData=this._comment.getAllComments().pipe(take(10))
    $subscribedData.subscribe((comments=>{
      console.log(comments)
      this.commetsData=comments;
    }))


    // this.activatedRoute.data.subscribe((data)=>{
    //   console.log(data)

    // })







  }

}










