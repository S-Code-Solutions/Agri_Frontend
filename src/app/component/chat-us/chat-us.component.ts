import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-chat-us',
  templateUrl: './chat-us.component.html',
  styleUrls: ['./chat-us.component.scss']
})
export class ChatUsComponent implements OnInit {

  cookieValues :any
  username :any

  ngOnInit(): void {
    this.cookieValues = JSON.parse(this.cookieService.get('Arr'));
    this.username = this.cookieValues.farmer_name;
  }
  // The entered username

  // will hold a random theme for the chat component
  selectedTheme = '';
  // will hold a random avatar for the chat component
  selectedAvatar = '';
  // Detect when the user clicked on 'START'
  isReady = false;
  // List of themes and avatars to pass one randomly to the chat component
  themes = ['success'];
  avatars = [
    'https://mir-s3-cdn-cf.behance.net/user/115/24e8af100183223.59cbd13b396ba.png',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/default.png?raw=true',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/hs3.png?raw=true',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/hs4.png?raw=true',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/hs5.png?raw=true',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/hs6.png?raw=true',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/hs7.png?raw=true'
  ];

  // Select one random avatar and theme for every chat component
  constructor(private _router: Router,private cookieService: CookieService) {
    this.selectedTheme = this.getTheme();
    this.selectedAvatar = this.getAvatar();
  }

  // Get random theme
  getTheme() {
    return this.themes[Math.floor(Math.random() * this.themes.length)];
  }

  // Get random avatar
  getAvatar() {
    return this.avatars[Math.floor(Math.random() * this.avatars.length)];
  }

  // show the chat component
  chat() {
    this.isReady = true;
  }


}
