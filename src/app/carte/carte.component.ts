import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  pizzas = [{name: '4fromages', prix : 3 }, {name: 'bolo', prix : 5 }, {name: 'chicken', prix : 4 }];

  constructor() { }

  ngOnInit(): void {
  }

}
