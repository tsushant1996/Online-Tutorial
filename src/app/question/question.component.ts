import { Http } from '@angular/http';
import { QuestionService } from './../question.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



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


  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) {

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
     

      console.log(this.score);


    }

  }

  takeAnother() {
    this.router.navigate(['/subject']);
  }

}