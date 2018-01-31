import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../discussion.service';
import { SubjectService } from '../subject.service';
import { QuestionService } from '../question.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  discussions: any[];
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
  .subscribe(res => console.log('dis',res));

  this.service.getDiscussions()
   .subscribe(res => this.discussions = res);
/*
  let dis: any = {
    discussion_title: f.value.title,
    discussion_text: f.value.body,
     discussion_user: this.user.displayName,
    discussion_subject: f.value.subjectSelect,
    discussion_date: new Date(),
    }
    this.discussions.push(dis);
  
*/

}

getAllDiscussions() {

  this.service.getDiscussions()
  .subscribe(res => this.discussions.push(res));


}


}
