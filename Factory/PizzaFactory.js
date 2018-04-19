var fromPizza =  require('./Pizza');
var {Pizza, ItalianPizza, MaxicanPizza} = fromPizza;
function PizzaShop(){
    this.pizza;
    this.bill;
    this.isOrdered;
    this.isDelivered;
    this.shop = "NonBranded";
}
PizzaShop.prototype.pizzaFactory = function(type, shape, herbs, origin){
    switch(origin){
        case "Maxico":
            this.pizza = new MaxicanPizza( type, shape, herbs);
            break;
        case "Italy":
            this.pizza = new ItalianPizza( type, shape, herbs);
            break;
        default:
            this.pizza = new Pizza( type, shape);
            break;
    }
}

PizzaShop.prototype.createBill = function(){
    this.bill = Math.random()*9;
}
PizzaShop.prototype.createOrder = function(){
    this.isOrdered = true;
}
PizzaShop.prototype.deliver = function(){
    this.isDelivered = true;
}
PizzaShop.prototype.status = function(){
    
    console.log(`your order from ${this.shop}:-
                ${this.pizza.getPizza()}
                Your Total Bill : ${this.bill}
                Delivery Status : ${this.isDelivered}`);
}
PizzaShop.prototype.orderMyPizza = function(type, shape, herbs=[], origin){
    this.createOrder();
    this.pizzaFactory(type, shape, herbs, origin);
    this.createBill();
    this.deliver();
    console.log("Please Wait, we are making ur Pizza.....");
    setTimeout(()=>{
        this.status();
    },1000*(Math.random()*5))
}

function PizzaHut(){
    PizzaShop.call(this);
    this.shop = "Pizza Hut";
}
PizzaHut.prototype = Object.create(PizzaShop.prototype);

function Dominos(){
    PizzaShop.call(this);
    this.shop = "Dominos";
}
Dominos.prototype = Object.create(PizzaShop.prototype);

function Mozo(){
    PizzaShop.call(this);
    this.shop = "Mozo Pizza";
}
Mozo.prototype = Object.create(PizzaShop.prototype);

module.exports = {PizzaShop, PizzaHut, Dominos, Mozo}
