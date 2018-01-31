import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class DiscussionService {

  constructor(private http: Http) { }


  getDiscussions() {
    return this.http.get('/discussion/getDiscussions')
      .map(res => res.json());
  }

  getSingleDiscussion(id) {
    //   this.http.post('/question/getquestion', JSON.stringify(subject))
    //  .subscribe(res => console.log(res));


    var creds = {
      fields: {
        username: 'user',
        password: 'password',
        id: id
      }
    }

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');


    return this.http.post('/discussion/getSingleDiscussions', JSON.stringify(creds), {
      headers: headers
    })
      .map(res => res.json());
  }



  //for commnet
  addComment(id, comm) {
    //   this.http.post('/question/getquestion', JSON.stringify(subject))
    //  .subscribe(res => console.log(res));
    var comment = {
      fields: {
        id: id,
        user: 'sush',
        body: comm
      }
    }
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/discussion/addComment', JSON.stringify(comment), {
      headers: headers
    })
      .map(res => res.json());
  }


  //adding discussion

  addDiscussion(f, user) {
   
    var comment = {
      fields: {
        subject: f.value.subjectSelect,
        user: user.displayName,
        body: f.value.body,
        title: f.value.title

      }
    }

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/discussion/addDiscussion', JSON.stringify(comment), {
      headers: headers
    })
      .map(res => console.log('discussion servrice'));


  }

  deleteDiscussion(del) {


    var comment = {
      fields: {
        subject: del,
       

      }
    }

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/discussion/deleteDiscussion', JSON.stringify(comment), {
      headers: headers
    })
      .map(res => res.json());

  }




}



