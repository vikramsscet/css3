function fromPrototype(prototype, object){
    var newObject=Object.create(prototype);
    Object.keys(object).forEach(key=>{
        newObject[key] = object[key];
    });
    return newObject;
}

function getPizza(obj){
        return {    
            description : `${obj.brand} ${obj.type} pizza...`
        }
}


function Pizza(){
    this.description = getPizza()
}




var PizzaFactory = {
    createPizza : function(type){
        switch(type){
            case "cheese":
                return fromPrototype(Pizza, getPizza().CheesePizza);
                break;
            case "veggie":
                return fromPrototype(Pizza, getPizza().VeggiePizza);
                break;
            default:
                return getPizza().Pizza;    
        }
    }
}

var Dominos = {}