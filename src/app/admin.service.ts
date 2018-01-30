import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AdminService {

  constructor(private http: Http) { }

  addSubject(subject) {
    console.log(subject);

    var data = {
      fields: {
        subject: subject,
      }
    }

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');


      return  this.http.post('/tutorial/addSubject', JSON.stringify(data), {
      headers : headers
      })
      .map(res => res.json());
  }

  addTutorial(f) {

    var creds = {
      fields: {
        id: f.value.subjectSelect,
        key : f.value.title,
        body : f.value.body
      }
    }

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');


      return  this.http.post('/tutorial/addTutorial', JSON.stringify(creds), {
      headers : headers
      })
      .map(res => res.json());

  }

  getTutorial(subject) {

    var creds = {
      fields: {
        id: subject
      }
    }


    var headers = new Headers();
    headers.append('Content-Type', 'application/json');


      return  this.http.post('/tutorial/getTutorial', JSON.stringify(creds), {
      headers : headers
      })
      .map(res => res.json());

  
  
  
    }

    getSingleTutorial(id, subject) {

      var creds = {
        fields: {
          id: id,
          subject: subject,
        }
      }
  
  
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
  
  
        return  this.http.post('/tutorial/getSingleTutorial', JSON.stringify(creds), {
        headers : headers
        })
        .map(res => res.json());

    }

}
