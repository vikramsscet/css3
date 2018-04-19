var Factory = require('./PizzaFactory');
var {PizzaShop, PizzaHut, Dominos, Mozo} = Factory;
(function run(){
    var pizza = new Mozo();
    pizza.orderMyPizza("cheese","slice", ["herb1","herb2","herb3"],"Maxicoo");
})();

