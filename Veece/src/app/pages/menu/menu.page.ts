import { Component, OnInit } from '@angular/core';
import { getAuth, signOut } from "firebase/auth";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  oAuth = getAuth();

  user = this.oAuth.currentUser;

  constructor() { }

  ngOnInit() {
  }

}
