import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../discussion.service';
import { SubjectService } from '../subject.service';
import { QuestionService } from '../question.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../auth.service';
import { Promise, resolve, reject } from 'q';
import { Server } from 'selenium-webdriver/safari';



@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  discussions: any[];
  titleName: string;
  isTrue = false;
  subjects: any = [];
  user: any;
  title: string;
  subjectSelect: string;
  body: string;

  constructor(private service: DiscussionService,
    private subjectService: SubjectService,
    private questionService: QuestionService,
    private auth: AuthService) { }

  ngOnInit() {
    this.service.getDiscussions()
      .subscribe(res => this.discussions = res.result.discussions);

    this.subjectService.getSubjects()
      .subscribe(res => this.subjects = res);

    this.auth.user$
      .subscribe(user => this.user = user);
  }

  displayForm() {
    this.isTrue = true;
  }

  OnSubmit(f) {
    this.service.addDiscussion(f, this.user)
      .subscribe(res => this.discussions.splice(0, 0, res.result.discussion));

    this.title = '';
    this.subjectSelect = '';
    this.body = '';


  }



}



