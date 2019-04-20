import { Component, OnInit } from '@angular/core';
import {DietDay} from '../Shared/plan-detail.component';

@Component({
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
public selectedDay: number= 0;

myPlan: DietDay[];


  constructor() { }

  ngOnInit() {
  }

  dayClicked (dayNumber:number): void {
    this.selectedDay=dayNumber;
  }
}
