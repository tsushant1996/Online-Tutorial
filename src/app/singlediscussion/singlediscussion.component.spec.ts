import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglediscussionComponent } from './singlediscussion.component';

describe('SinglediscussionComponent', () => {
  let component: SinglediscussionComponent;
  let fixture: ComponentFixture<SinglediscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglediscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglediscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
