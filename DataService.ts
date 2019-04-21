import { Injectable } from "@angular/core";
import { Breakfast, Snack, Lunch, Dinner, DietDay} from './plan-detail.component';

@Injectable ({
    providedIn: 'root'
})

export class DataService {

    //fixed json file, but normally linked to a backend

public breakfastSelection: Breakfast [] = [
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
            }
        ]
    }, {
        recipeName: "Apple juice",
        method: "Buy good quality apple juice; not from concentrate, without sugar",
        photo: "assets/img/applejuice.jpg",
        ingredients: [
            {
            productName: "apple juice",
            quantity: 250,
            unit: "ml"
            },
            {
            productName: "mint",
            quantity: 1,
             unit: "g"   
            }
        ]
    }, {
        recipeName: "Grated carrots",
        method: "Wash the carrots, grate and sprinkle with lemon juice",
        photo: "assets/img/carrots.jpg",
        ingredients: [
            {
            productName: "carrots",
            quantity: 2,
            unit: "pieces"
            },
            {
            productName: "lemon juice",
            quantity: 10,
            unit: "ml"
            }
        ]
    }  
]

public snackSelection: Snack []= [

    {
        recipeName: "Spinach smoothie",
        method: "Wash the vegetables and blend all ingredients with 200ml of water",
        photo: "assets/img/spinach.jpg",
        ingredients: [
            {
            productName: "apple",
            quantity: 1,
            unit: "piece"
            },
            {
            productName: "spinach",
            quantity: 50,
            unit: "g"
            },
            {
            productName: "ginger",
            quantity: 1,
            unit: "g"
            },
            {
            productName: "lemon juice",
            quantity: 1,
            unit: "g"
            }   
            ]
    },
    
    {
        recipeName: "Coleslow",
        method: "Grate carrots and beetroots, shred cabbage and sprinkle generously with lemon juice",
        photo: "assets/img/coleslaw.jpg",
        ingredients: [
            {
            productName: "beetroots",
            quantity: 100,
            unit: "g"
            },
            {
            productName: "carrots",
            quantity: 200,
            unit: "g"
            },
            {
            productName: "cabbage",
            quantity: 100,
            unit: "g"
            },
            {
            productName: "lemon juice",
            quantity: 10,
            unit: "ml"
            }
        ]
    },
    {
        recipeName: "Apple mousse",
        method: "Remove the core and simmer the apples until soft. Puree and add fresh mint",
        photo: "assets/img/mousse.jpg",
        ingredients: [
            {
            productName: "apples",
            quantity: 2,
            unit: "pieces"
            },
            {
            productName: "mint",
            quantity: 1,
            unit: "g"
            }
        ]
    },
    {
        recipeName: "Mixed berries",
        method: "Wash the fruit and sprinkle with apple and lemon juice",
        photo: "assets/img/berries.jpg",
        ingredients: [
            {
            productName: "strawberries",
            quantity: 100,
            unit: "g"
            },
            {
            productName: "raspberries",
            quantity: 50,
            unit: "g"
            },
            {
            productName: "blueberries",
            quantity: 50,
            unit: "g"
            },
            {
            productName: "lemon juice",
            quantity: 5,
            unit: "ml"
            },
            {
            productName: "apple juice",
            quantity: 5,
            unit: "ml"
            }
        ]
    }

]

public lunchSelection: Lunch [] = [

    {
        recipeName: "Baked vegetables",
        method: "wash the vegetables, slice and arrange on a baking tray. Pour over tomato passata and season. Bake for 30 min in 160C",
        photo: "assets/img/bake.jpg",
        ingredients: [
            {
              productName: "peppers",
              quantity: 2,
              unit: "pieces"
             },
             {
              productName: "crougettes",
              quantity: 1,
              unit: "piece"
             },
             {
                productName: "aubergines",
                quantity: 1,
                unit: "piece"
               },  
               {
                productName: "tomato passata",
                quantity: 300,
                unit: "ml"
               },
               {
                productName: "oregano",
                quantity: 1,
                unit: "g"
               },
               {
                productName: "basil",
                quantity: 5,
                unit: "g"
               }    
            ]
    },
    {
        recipeName: "Vegetable soup",
        method: "Wash and slice the vegetables. Boil in water for 20 min and season before serving",
        photo: "assets/img/soup.jpg",
        ingredients: [
            {
            productName: "carrots",
            quantity: 2,
            unit: "pieces"
            },
            {
            productName: "parsnip",
            quantity: 1,
            unit: "piece"
            },
            {
                productName: "onions",
                quantity: 1,
                unit: "pieces"
                },
                {
                productName: "celery",
                quantity: 1,
                unit: "piece"
                },
                {
                productName: "parsley",
                quantity: 1,
                unit: "g"
                },
               {
                productName: "dill",
                quantity: 1,
                unit: "g"
                },
                {
                productName: "majoran",
                quantity: 0.5,
                unit: "g"
                },
                {
                productName: "basil",
                quantity: 1,
                unit: "g"
                }
        ]
    },
    {
        recipeName: "Grilled pumpkin",
        method: "Slice the pumpkin, and grill for 20 min in 180C. Before serving sprinkle with parsley",
        photo: "assets/img/pumpkin.jpg",
        ingredients: [
            {
            productName: "pumpkin",
            quantity: 1,
            unit: "piece"
            },
            {
            productName: "parsley",
            quantity: 1,
            unit: "g"
            }
        ]
    },
    {
        recipeName: "Sauerkraut stew",
        method: "Mix cabbage and boil with chopped onions for 20 min. Add sliced apple, add tomato puree and boil for another 15 min. Season before serving",
        photo: "assets/img/stew.jpg",
        ingredients: [
            {
            productName: "soured cabbage",
            quantity: 150,
            unit: "g"
            },
            {
            productName: "fresh cabbage",
            quantity: 200,
            unit: "g"
            },
            {
            productName: "onions",
            quantity: 1,
            unit: "piece"
            },
            {
            productName: "apples",
            quantity: 1,
            unit: "piece"
            },
            {
            productName: "cumin",
            quantity: 0.5,
            unit: "g"
            },
            {
            productName: "majoran",
            quantity: 0.5,
            unit: "g"
            },
            {
            productName: "tomato pure",
            quantity: 50,
            unit: "g"
            }
            ]
    }
]

public dinnerSelection: Dinner [] = [

    {
        recipeName: "Letcho",
        method: "Boil the onion in a small amount of water, add sliced vegatables, tomato pure and boil for another 15 min. Season before serving",
        photo: "assets/img/letcho.jpg",
        ingredients: [
            {
            productName: "peppers",
            quantity: 2,
            unit: "pieces"
            },
            {
            productName: "courgettes",
            quantity: 1,
            unit: "piece"
            },
            {
            productName: "onions",
            quantity: 1,
            unit: "pieces"
            },
            {
            productName: "parsley",
            quantity: 1,
            unit: "g"
            },
            {
            productName: "tomato pure",
            quantity: 50,
            unit: "g"
            } 
        ]
    },
    {
        recipeName: "Steamed vegetables",
        method: "Boil the vegatables in salted water and sprinkle with dill before serving",
        photo: "assets/img/steamed.jpg",
        ingredients: [
            {
            productName: "carrots",
            quantity: 2,
            unit: "pieces"
            },
            {
            productName: "cauliflower",
            quantity: 1,
            unit: "piece"
            },
            {
            productName: "dill",
            "quantity": 1,
            "unit": "g"
            } 
        ]
    },
    {
        recipeName: "Boiled beetroots",
        method: "Boil the beetroots in salted water for 15 min, slice the beetroots and apples. Arrange on a plate and sprinkle generously with chives",
        photo: "assets/img/beetroots.jpg",
        ingredients: [
            {
            productName: "beetroots",
            quantity: 2,
            unit: "pieces"
            },
            {
            productName: "apple",
            "quantity": 1,
            "unit": "piece"
            },
            {
            productName: "chives",
            quantity: 2,
            unit: "g"
            } 
        ]
    },
    {
        recipeName: "Green leaf salad",
        method: "Salad and sliced vegetables arrange on a plate. Mix lemon, apple juice with vinegar and pour over salad",
        photo: "assets/img/greenleaf.jpg",
        ingredients: [
            {
            productName: "green leaf salad",
            quantity: 60,
            unit: "g"
            },
            {
            productName: "tomatoes",
            quantity: 150,
            unit: "g"
            },
            {
            productName: "celery",
            quantity: 1,
            unit: "g"
            },
            {
            productName: "cucumber",
            quantity: 100,
            unit: "g"
            },
            {
            productName: "lemon juice",
            quantity: 5,
            unit: "ml"
            },
            {
            productName: "vinegar",
            quantity: 5,
            unit: "ml"
            },
            {
            productName: "apple juice",
            quantity: 5,
            unit: "ml"
            }        
        ]
    }

]

public myDiet: DietDay[] = [
    {
        firstMeal:this.breakfastSelection [0],
        secondMeal:this.snackSelection[0],
        thirdMeal:this.lunchSelection[0],
        fourthMeal:this.snackSelection[0],
        fifthMeal:this.dinnerSelection[0],
        showMealChoice: false
    },
    {
        firstMeal:this.breakfastSelection [1],
        secondMeal:this.snackSelection[1],
        thirdMeal:this.lunchSelection[1],
        fourthMeal:this.snackSelection[1],
        fifthMeal:this.dinnerSelection[1],
        showMealChoice: false
    },
    {
        firstMeal:this.breakfastSelection [2],
        secondMeal:this.snackSelection[2],
        thirdMeal:this.lunchSelection[2],
        fourthMeal:this.snackSelection[2],
        fifthMeal:this.dinnerSelection[2],
        showMealChoice: false
    }
    
]

}