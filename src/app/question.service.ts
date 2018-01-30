import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class QuestionService  {

  constructor(private http: Http) { }

  getPosts(subject) {
 //   this.http.post('/question/getquestion', JSON.stringify(subject))
   //  .subscribe(res => console.log(res));


     var creds = {
      fields: {
        username: 'user',
        password: 'password',
        subject: subject
      }
    }

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');


      return  this.http.post('/question/getquestion', JSON.stringify(creds), {
      headers : headers
      })
      .map(res => res.json());
  }


 



}