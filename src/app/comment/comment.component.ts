import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../discussion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  commen: any = [];
  id: string;
  isValue: string;
 

  constructor(private service: DiscussionService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe(params => this.id = params.get('id'));
    console.log(this.id);


    this.service.getSingleDiscussion(this.id)
      .subscribe(res => this.commen = res);

      console.log(this.commen);



  }



  onKeyUp(comm : HTMLInputElement) {


    this.service.addComment(this.id, comm.value)
     .subscribe(res => this.commen = res);

     this.service.getSingleDiscussion(this.id)
      .subscribe(res => this.commen = res);
    comm.value = '';
  }




}
