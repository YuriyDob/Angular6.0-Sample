import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatContentComponentComponent } from './chat-content-component.component';

describe('ChatContentComponentComponent', () => {
  let component: ChatContentComponentComponent;
  let fixture: ComponentFixture<ChatContentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatContentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
