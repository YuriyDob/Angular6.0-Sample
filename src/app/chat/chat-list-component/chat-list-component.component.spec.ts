import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListComponentComponent } from './chat-list-component.component';

describe('ChatListComponentComponent', () => {
  let component: ChatListComponentComponent;
  let fixture: ComponentFixture<ChatListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
