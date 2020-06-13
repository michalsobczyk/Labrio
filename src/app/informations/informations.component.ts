import { Component, OnInit } from '@angular/core';
import { Badanie } from '../models/Badanie';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
  elements: Badanie[];
  constructor() { }

  ngOnInit(): void {
    this.elements = [
      { nazwa: "Morfologia, OB", czestotliwosc: "Raz w roku" },
      { nazwa: "Glukoza", czestotliwosc: "Raz w roku" },
      { nazwa: "LIPIDOGRAM", czestotliwosc: "co 3-5 lat" },
      { nazwa: "Cutologia ginekologiczna (kobiety)", czestotliwosc: "Raz w roku" },
      { nazwa: "Badanie ogólne moczu", czestotliwosc: "Raz w roku" }
    ];
  }

}
