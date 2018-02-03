import { Http } from '@angular/http';
import { QuestionService } from './../question.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TemplateRef } from '@angular/core/src/linker/template_ref';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionsNo: any = [];
  subject: string;
  questions: any = [];
  isTrue = false;
  score: number;
  modalRef: BsModalRef;

  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router,
    private modalService: BsModalService) {

  }

  ngOnInit() {
    console.log('question components');
    this.isTrue = true;
    this.route.paramMap
      .subscribe(params => this.subject = params.get('subject'));
    console.log(this.subject);

    this.questionService.getPosts(this.subject)
      .subscribe(res => this.questions = res);


  }




  submitTest(a) {

    this.isTrue = false;
    let w = 0;
    for (let q of this.questions) {
      if (q.ques_answer === a.value[q.ques_text]) {
        w = w + 1;
        

        this.score = w;

      }
       
      
  


    }

  }



 

  takeAnother() {
    this.router.navigate(['/subject']);
  }

}