import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  customStyle = {
    backgroundColor: "#fff",
    border: "1px solid #7e7e7e",
    color: "#343a40"
  };

  constructor() { }

  ngOnInit() { }

}
