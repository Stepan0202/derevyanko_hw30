'use strict';
class Ingredient{
    constructor(name, price, calories){
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}

class Hamburger{
    static CHEESE = new Ingredient('cheese', 10, 20);
    static SALAD = new Ingredient('salad', 20, 5);
    static POTATO = new Ingredient('potato', 15, 10);
    static TOPPING_SAUCE = new Ingredient('sauce', 15, 0);
    static TOPPING_MAYO = new Ingredient('mayo', 20, 5);
    constructor(type){
        this.addedIngred = [];
        this.toppings = [];
        this.type = type.toLowerCase();
        this.price = this.getThisPrice();
        this.calories = this.getThisCalories();

    }

    getThisPrice(){
        let price = 0;
        switch(this.type){
            case 'big':
                price += 100;
                break;
            case 'small':
                price += 50;
                break;
            default:
                alert("Hamburger can be BIG or SMALL only");
        }
        if (this.addedIngred.length > 0) this.addedIngred.forEach(ingred => price += ingred.price);
        if (this.toppings.length > 0) this.toppings.forEach(topping=> price += topping.price);
        return price;
    }
    getThisCalories(){
        let calories = 0;
        switch(this.type){
            case 'big':
                calories += 40;
                break;
            case 'small':
                calories += 20;
                break;
            default:
                alert("Hamburger can be BIG or SMALL only");
        }
        if (this.addedIngred.length > 0) this.addedIngred.forEach(ingred => calories += ingred.calories);
        if (this.toppings.length > 0) this.toppings.forEach(topping=> calories += topping.calories);
        return calories;
    }
    addIngred(ingred){

    }
    addTopping(topping){
        calories
    }
}



const hamburgerSmall = new Hamburger('small');
const hamburgerBig = new Hamburger('big');
console.log(hamburgerSmall.price);
console.log(hamburgerSmall.calories);
console.log(hamburgerBig.price);
console.log(hamburgerBig.calories);
console.log(Hamburger.CHEESE);
