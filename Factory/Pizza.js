function Pizza(type, shape){
    this.type = type;
    this.shape = shape;
}
Pizza.prototype.getPizza = function(){
    return `this is ${this.type} pizza of ${this.shape} shape without any origin special herbs`;
}

function ItalianPizza(type, shape, herbs){
    Pizza.call(this, type, shape);
    this.herbs = herbs;
    this.origin = "Italy"
}
ItalianPizza.prototype = Object.create(Pizza.prototype);
ItalianPizza.prototype.getPizza = function(){
    return `this is ${this.type} pizza of ${this.shape} shape with ${this.herbs.join(",")} herbs from ${this.origin}`;
}

function MaxicanPizza(type, shape, herbs){
    Pizza.call(this, type, shape);
    this.herbs = herbs;
    this.origin = "Maxico"
}
MaxicanPizza.prototype = Object.create(Pizza.prototype);
MaxicanPizza.prototype.getPizza = function(){
    return `this is ${this.type} pizza of ${this.shape} shape with ${this.herbs.join(",")} herbs from ${this.origin}`;
}

module.exports = {Pizza, ItalianPizza, MaxicanPizza};