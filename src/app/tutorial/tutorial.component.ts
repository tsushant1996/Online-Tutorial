import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  tutorials: any = [];
  tumorials : any = [];
  tutorialValue: string;
  subject:string;
  constructor(private service: AdminService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe(params => this.subject = params.get('subject'));
    console.log(this.subject);

    this.service.getTutorial(this.subject)
     .subscribe(res =>  this.tutorials = res);

     this.service.getTutorial(this.subject)
      .subscribe(res => this.displayTutorial(res.SubjectTutorial[0]._id));
     


     
  }


  displayTutorial(id) {
    console.log(this.tutorials.SubjectTutorial[0]._id);

    this.service.getSingleTutorial(id,this.subject)
     .subscribe(res => this.tumorials = res);
  }


  getFirstTutorial() {
    console.log(this.tutorials.SubjectTutorial[0]._id);
    this.displayTutorial(this.tutorials.SubjectTutorial[0]._id);
  }
 
  

}
