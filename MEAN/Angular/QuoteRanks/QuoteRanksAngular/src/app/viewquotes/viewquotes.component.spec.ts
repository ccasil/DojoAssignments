import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquotesComponent } from './viewquotes.component';

describe('ViewquotesComponent', () => {
  let component: ViewquotesComponent;
  let fixture: ComponentFixture<ViewquotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewquotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
