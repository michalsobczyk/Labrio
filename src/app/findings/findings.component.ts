import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
@Component({
  selector: 'app-findings',
  templateUrl: './findings.component.html',
  styleUrls: ['./findings.component.css']
})
export class FindingsComponent implements OnInit {
  user: User;
  constructor() {
  }

  ngOnInit(): void {
    this.user = {
      name: "USERNAME PLACEHOLDER"
    }
  }

}
