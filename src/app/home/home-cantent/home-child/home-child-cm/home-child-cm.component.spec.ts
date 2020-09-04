import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildCmComponent } from './home-child-cm.component';

describe('HomeChildCmComponent', () => {
  let component: HomeChildCmComponent;
  let fixture: ComponentFixture<HomeChildCmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChildCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChildCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
