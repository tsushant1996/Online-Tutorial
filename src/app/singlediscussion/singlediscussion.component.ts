import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscussionService } from '../discussion.service';

@Component({
  selector: 'app-singlediscussion',
  templateUrl: './singlediscussion.component.html',
  styleUrls: ['./singlediscussion.component.css']
})
export class SinglediscussionComponent implements OnInit {

  id: string;
  discussion: any = [];

  constructor(private route: ActivatedRoute, private service: DiscussionService) { }

  ngOnInit() {
    this.route.paramMap
     .subscribe(params => this.id = params.get('id'));

     this.service.getSingleDiscussion(this.id)
      .subscribe(res => this.discussion = res);
  }

}
