import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SubjectService {

  constructor(private http: Http) { }

   getSubjects() {
    return this.http.get('/tutorial/getSubjects')
      .map(res => res.json());
  }

}
