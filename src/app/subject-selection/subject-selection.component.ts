import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-selection',
  templateUrl: './subject-selection.component.html',
  styleUrls: ['./subject-selection.component.css']
})
export class SubjectSelectionComponent implements OnInit {

  subjects: any = [];

  constructor(private subjectService: SubjectService, private router: Router) { }

  ngOnInit() {

    this.subjectService.getSubjects()
       .subscribe(res => this.subjects = res);
  }

  submit(f) {
    let sub = f.value.subjectSelect;
    this.router.navigate(['/tute', sub]);
  }

}
