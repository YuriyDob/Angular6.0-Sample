import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ChatService {

  private chats  = [];
  public activeChat = new Subject();
  public itemValue = new Subject();
  constructor(
  ) { }

  set setActiveChat(i) {
    this.activeChat.next(i);
  }

  get getActiveChat() {
    return this.activeChat;
  }

  get getChats() {
    const chatsString = window.localStorage.getItem('chats');
    if (chatsString) {
      Object.assign(this.chats, JSON.parse(chatsString));
    }
    return this.chats;
  }

  set setChats(value) {
    localStorage.setItem('chats', value);
    this.itemValue.next(value);
  }

}
