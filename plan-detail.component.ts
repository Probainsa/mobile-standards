export class DietDay{
    firstMeal: Breakfast;
    secondMeal: Snack;
    thirdMeal:Lunch;
    fourthMeal: Snack;
    fifthMeal: Dinner;
    showMealChoice: boolean;
}

export interface IMealOption {
    recipeName: string;
    method:string;
    photo: string;
    ingredients: Array<Iingredients>;
}

export class Breakfast implements IMealOption {
    recipeName: string;
    method: string;
    photo: string;
    ingredients: Array <Iingredients>=new Array <Iingredients>();
     
    }

export class Snack implements IMealOption {
    recipeName: string;
    method: string;
    photo: string;
    ingredients: Array <Iingredients>=new Array <Iingredients>();
}

export class Lunch implements IMealOption {
    recipeName: string;
    method: string;
    photo: string;
    ingredients: Array <Iingredients>=new Array <Iingredients>();
}

export class Dinner implements IMealOption {
    recipeName: string;
    method: string;
    photo: string;
    ingredients: Array <Iingredients>=new Array <Iingredients>();
}

export class Iingredients {
    productName: string;
    quantity: number;
    unit: string;
}