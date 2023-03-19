import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkflowComponent } from './home-workflow.component';

describe('HomeWorkflowComponent', () => {
  let component: HomeWorkflowComponent;
  let fixture: ComponentFixture<HomeWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWorkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
