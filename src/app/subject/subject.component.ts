import { SubjectService } from './../subject.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent  implements OnInit {

  subjects: any = [];

  constructor(private service: SubjectService, private router: Router) {
   }

   ngOnInit() {
    this.service.getSubjects()
     .subscribe(res => this.subjects = res);

   }

   OnSubmit(f) {
     let sub : string = f.value.subjectSelect;
    this.router.navigate(['/question', sub]);
   }


}
