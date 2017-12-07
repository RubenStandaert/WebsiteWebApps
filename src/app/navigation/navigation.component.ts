import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public username : String;

  constructor() { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('currentUser')).username;
  }

}
