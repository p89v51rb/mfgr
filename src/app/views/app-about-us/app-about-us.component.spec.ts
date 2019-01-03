import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAboutUsComponent } from './app-about-us.component';

describe('AppAboutUsComponent', () => {
  let component: AppAboutUsComponent;
  let fixture: ComponentFixture<AppAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
