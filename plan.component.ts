import { Component, OnInit } from '@angular/core';
import {DietDay, IMealOption} from '../Shared/plan-detail.component';
import {DataService } from '../Shared/DataService';

@Component({
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
 
  constructor(private data: DataService) { }
 
  public myPlan: DietDay[];
  public mealList: IMealOption [];
  public selectedMeal: number = 0;
  public selectedDay: number= 0;

  dayClicked (dayNumber:number): void {
    this.selectedDay=dayNumber;
  }

  toggleChoice(recipeChoice: number): void {
    this.selectedMeal = recipeChoice;
    if (recipeChoice==0){
      this.mealList=this.data.breakfastSelection;
    }
    if (recipeChoice==1)
    {
      this.mealList=this.data.snackSelection;
    }
    if (recipeChoice==2)
    {
      this.mealList=this.data.lunchSelection;
    }
    if (recipeChoice==3)
    {
      this.mealList=this.data.snackSelection;
    }
    if (recipeChoice==4)
    {
      this.mealList=this.data.dinnerSelection;
    }
    this.myPlan[this.selectedDay-1].showMealChoice = !this.myPlan[this.selectedDay-1].showMealChoice;
  }

  changeChoice(selection: number): void {
    if (this.selectedMeal==0){
      this.myPlan[this.selectedDay-1].firstMeal = this.mealList[selection];
    }
    if (this.selectedMeal==1){
      this.myPlan[this.selectedDay-1].secondMeal = this.mealList[selection];
    } 
    if (this.selectedMeal==2){
      this.myPlan[this.selectedDay-1].thirdMeal = this.mealList[selection];
    } 
    if (this.selectedMeal==3){
      this.myPlan[this.selectedDay-1].fourthMeal = this.mealList[selection];
    } 
    if (this.selectedMeal==4){
      this.myPlan[this.selectedDay-1].fifthMeal = this.mealList[selection];
    } 
    
    this.myPlan[this.selectedDay-1].showMealChoice = false;
  }


  ngOnInit() {
    this.myPlan=this.data.myDiet;
    
  }

  
}
