import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCantentComponent } from './home-cantent.component';

describe('HomeCantentComponent', () => {
  let component: HomeCantentComponent;
  let fixture: ComponentFixture<HomeCantentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCantentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCantentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
