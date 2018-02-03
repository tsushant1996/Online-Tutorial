import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { DiscussionService } from '../discussion.service';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  discussions: any = [];
  del: any = [];
  subject_select: string;
  subjects: any = [];
  constructor(private subjectService: SubjectService , private service: AdminService, private discussionService: DiscussionService) { }

  ngOnInit() {

    this.discussionService.getDiscussions()
      .subscribe(res => this.discussions = res);

      this.subjectService.getSubjects()
       .subscribe(res => this.subjects = res);

  }

  log(x) {
    console.log(x);
  }

  submit(subject) {

    console.log('admin', subject);
    this.service.addSubject(subject.value.subject)
      .subscribe(res => console.log(res));
    this.subject_select = '';
    alert('subject added');
  }

  OnTutorialSubmit(f) {
    this.service.addTutorial(f)
      .subscribe(res => console.log(res));

  }

  delete() {
    this.discussionService.deleteDiscussion(this.del)
      .subscribe(res => console.log(res));

    this.discussionService.getDiscussions()
      .subscribe(res => this.discussions = res);


  }

  onSelect($event) {

    if ($event.target.checked) {
      console.log('checked');
      this.del.push($event.target.value);

    }
    if (!$event.target.checked) {
      console.log('unchecked');
      this.del.pop($event.target.value);

    }
    console.log(this.del);

  }

}
