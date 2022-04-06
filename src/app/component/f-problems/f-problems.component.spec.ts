import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FProblemsComponent } from './f-problems.component';

describe('FProblemsComponent', () => {
  let component: FProblemsComponent;
  let fixture: ComponentFixture<FProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FProblemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
