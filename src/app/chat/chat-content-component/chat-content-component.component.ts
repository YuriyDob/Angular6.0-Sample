import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat-content-component',
  templateUrl: './chat-content-component.component.html',
  styleUrls: ['./chat-content-component.component.css']
})
export class ChatContentComponentComponent implements OnInit {

  public chatList;
  public activeChat;
  public messageText;
  constructor( private _ChatService: ChatService) {
    this._ChatService.activeChat.subscribe((active) => {
      this.activeChat = active;
    });
    this._ChatService.itemValue.subscribe(() => {
      this.chatList = this._ChatService.getChats;
    });
  }

  ngOnInit() {
    this.chatList = this._ChatService.getChats;
  }

  sendMessage() {
    if (this.messageText.length) {
        const message = {
          text: this.messageText,
          time: new Date()
        };
        this.chatList[this.activeChat].messages.push(message);
        this._ChatService.setChats = JSON.stringify(this.chatList);
        this.messageText = '';
      }
    }


}
