'use strict';
class Ingredient{
    constructor(name, price, calories){
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}

class Hamburger{
    static STUFFING_CHEESE = new Ingredient('cheese', 10, 20);
    static SALAD = new Ingredient('salad', 20, 5);
    static POTATO = new Ingredient('potato', 15, 10);
    static TOPPING_SAUCE = new Ingredient('sauce', 15, 0);
    static TOPPING_MAYO = new Ingredient('mayo', 20, 5);
    static SIZE_SMALL = 'small';
    static SIZE_BIG = 'big';
    constructor(size){
        this.args = arguments;
        this.addedIngred = [];
        this.toppings = [];
        this.size = size.toLowerCase();
        this.checkArguments();
        this.price = this.countThisPrice();
        this.calories = this.countThisCalories();

    }
    checkArguments(){
        for(let i = 1; i < this.args.length; i++){
            this.addIngred(this.args[i]);
        }

    }
    countThisPrice(){
        let price = 0;
        switch(this.size){
            case 'big':
                price += 100;
                break;
            case 'small':
                price += 50;
                break;
            default:
                console.log("Hamburger can be BIG or SMALL only");
        }
        if (this.addedIngred.length > 0) this.addedIngred.forEach(ingred => price += ingred.price);
        if (this.toppings.length > 0) this.toppings.forEach(topping=> price += topping.price);
        return price;
    }
    countThisCalories(){
        let calories = 0;

        switch(this.size){
            case 'big':
                calories += 40;
                break;
            case 'small':
                calories += 20;
                break;
            default:
                console.log("Hamburger can be BIG or SMALL only");
        }
        if (this.addedIngred.length > 0) this.addedIngred.forEach(ingred => calories += ingred.calories);
        if (this.toppings.length > 0) this.toppings.forEach(topping=> calories += topping.calories);
        return calories;
    }
    //I can do just 1 func — addIngred, without addTopping. But I have task conditions
    addIngred(ingred){
        switch(ingred){
            case Hamburger.STUFFING_CHEESE:
                this.addedIngred.push(ingred);
                break;
            case Hamburger.SALAD:
                this.addedIngred.push(ingred);
                break;
            case Hamburger.POTATO:
                this.addedIngred.push(ingred);
                break;
            case Hamburger.TOPPING_SAUCE:
                this.toppings.push(ingred);
                break;
            case Hamburger.TOPPING_MAYO:
                this.toppings.push(ingred);
                break;
        }
        this.calories = this.countThisCalories();
        this.price = this.countThisPrice()
    }
    addTopping(topping){
        this.addIngred(topping);
    }
}

// маленький гамбургер із начинкою із сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// Добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// Запитаємо скільки там калорій
console.log("Calories: " + hamburger.countThisCalories());
// скільки коштує
console.log("Price: " + hamburger.countThisPrice());
// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.countThisPrice());