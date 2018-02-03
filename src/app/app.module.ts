import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule, CanActivate } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { CKEditorModule } from 'ng2-ckeditor';
import { CollapseModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';



import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SubjectComponent } from './subject/subject.component';
import { FormsModule } from '@angular/forms';
import { SubjectService } from './subject.service';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionService } from './discussion.service';
import { SinglediscussionComponent } from './singlediscussion/singlediscussion.component';
import { CommentComponent } from './comment/comment.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { SubjectSelectionComponent } from './subject-selection/subject-selection.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SubjectComponent,
    QuestionComponent,
    DiscussionComponent,
    SinglediscussionComponent,
    CommentComponent,
    TutorialComponent,
    AdminComponent,
    LoginComponent,
    SubjectSelectionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    CKEditorModule,
    FormsModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),

    RouterModule.forRoot([
      {path: '' , component: HomeComponent },
      {path: 'subject' , component: SubjectComponent },
      {path: 'admin-sushant' , component: AdminComponent },
      {path: 'tute/:subject' , component: TutorialComponent},
      {path: 'login' , component: LoginComponent },
      {path: 'subject_select' , component: SubjectSelectionComponent },
      {path: 'question/:subject' , component: QuestionComponent },
      {path: 'discussion/singlediscussion/:id' , component: SinglediscussionComponent },
      {path: 'discussion' , component: DiscussionComponent },
    ])
  ],
  providers: [SubjectService, QuestionService, DiscussionService, AdminService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
