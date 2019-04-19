import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './fmd.component.html',
  styleUrls: ['./fmd.component.css']
})
export class FmdComponent implements OnInit {
  pageTitle: string = 'Fasting Mimicking Diet';

  constructor() { }

  ngOnInit() {
  }

}
