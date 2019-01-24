import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat-list-component',
  templateUrl: './chat-list-component.component.html',
  styleUrls: ['./chat-list-component.component.css']
})
export class ChatListComponentComponent implements OnInit {

  public chatList = [];
  public newChatName = '';
  public activeChat;
  constructor( private _ChatService: ChatService) {
    this._ChatService.itemValue.subscribe(() => {
      this.chatList = this._ChatService.getChats;
    });
    this._ChatService.activeChat.subscribe((active) => {
      this.activeChat = active;
    });
  }

  ngOnInit() {
    this.chatList = this._ChatService.getChats;
  }

  addChat() {
    const newChat = {
      chatName: this.newChatName,
      messages: []
    };
    this.chatList.push(newChat);
    this._ChatService.setChats = JSON.stringify(this.chatList);
    this.newChatName = '';

  }

  removeChat(i) {
    this.chatList.splice(i, 1);
    this._ChatService.setChats = JSON.stringify(this.chatList);
    if (i === this.activeChat || !this.chatList.length) {
      this.openMessages(null);
    } else if (i < this.activeChat) {
      this.openMessages(--this.activeChat);
    }
  }

  openMessages(i) {
    this._ChatService.setActiveChat = i;
  }

}
