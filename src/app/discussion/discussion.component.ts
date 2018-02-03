import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../discussion.service';
import { SubjectService } from '../subject.service';
import { QuestionService } from '../question.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../auth.service';
import { Promise, resolve, reject } from 'q';



@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  discussions: any[];
  titleName:string;
  isTrue = false;
  subjects: any = [];
  user: any;

  constructor(private service: DiscussionService, private subjectService: SubjectService, private questionService:QuestionService,
  private auth: AuthService) { }

  ngOnInit() {
    this.service.getDiscussions()
      .subscribe(res => this.discussions = res);


      this.subjectService.getSubjects()
       .subscribe(res => this.subjects = res);


      this.auth.user$
       .subscribe(user => this.user = user);
}

displayForm() {

 this.isTrue = true;
}


//Submit form

OnSubmit(f) {

this.service.addDiscussion(f, this.user)
  .subscribe(res => console.log('sushant'));

  this.service.getDiscussions()
   .subscribe(res => console.log(res));
}

getAllDiscussions() {
  this.service.getDiscussions()
  .subscribe(res => this.discussions.push(res));

}


}
