import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUsComponent } from './chat-us.component';

describe('ChatUsComponent', () => {
  let component: ChatUsComponent;
  let fixture: ComponentFixture<ChatUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
