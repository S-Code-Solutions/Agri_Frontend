import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatUsRoutingModule } from './chat-us-routing.module';
import { ChatUsComponent } from './chat-us.component';
import { ChatComponent } from './components/chat/chat.component';
import {FormsModule} from "@angular/forms";
import {
  NbButtonModule,
  NbCardModule,
  NbChatModule,
  NbFormFieldModule,
  NbInputModule,
  NbLayoutModule, NbThemeModule
} from "@nebular/theme";


@NgModule({
  declarations: [
    ChatUsComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatUsRoutingModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    NbChatModule,
    NbFormFieldModule,
    NbThemeModule.forRoot({ name: 'default' })
  ]
})
export class ChatUsModule { }
