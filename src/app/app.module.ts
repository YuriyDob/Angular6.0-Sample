import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import {ChatService} from './chat/chat.service';
import {ChatContentComponentComponent} from './chat/chat-content-component/chat-content-component.component';
import {ChatListComponentComponent} from './chat/chat-list-component/chat-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    ChatListComponentComponent,
    ChatContentComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
