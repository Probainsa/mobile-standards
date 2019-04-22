import { Component, OnInit } from '@angular/core';
import { DataService } from '../Shared/DataService';
import { Iingredients, IMealOption } from '../Shared/plan-detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pageTitle: string='My Recipe List';
  photoWidth:number=100;
  
  filteredRecipes: IMealOption[];

  private _listFilter: string = 'apple';
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredRecipes = this.listFilter ? this.performFilter(this.listFilter) : this.recipes;
  }


  constructor() { 
    this.filteredRecipes = this.recipes;
    this.listFilter = 'apple';
  }

  public productList: Iingredients[];
  
  recipes: IMealOption[] =[
    {
      recipeName: "Poached pears",
      method: "Wash and bake in the oven for 45 min. Sprinkle with cinnamon and ginger",
      photo: "assets/img/pear.jpg",
      ingredients: [
          {
            productName: "apple",
            quantity: 2,
            unit: "pieces"
           },
           {
            productName: "cinnamon",
            quantity: 1,
            unit: "g"
           },
           {
              productName: "ginger",
              quantity: 1,
              unit: "g"
             }    
          ]
  }, {
      recipeName: "Baked apples",
      method: "Wash and bake in the oven for 15 min. Sprinkle with cinnamon",
      photo: "assets/img/apple.jpg",
      ingredients: [
          {
          productName: "apple",
          quantity: 2,
          unit: "pieces"
          },
          {
          productName: "cinnamon",
          quantity: 1,
          unit: "g"
          }] 
}]

ngOnInit(): void {
  console.log('this is ngOnInit');
}

performFilter(filterBy: string): IMealOption[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.recipes.filter((product: IMealOption) =>
    product.recipeName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

}

