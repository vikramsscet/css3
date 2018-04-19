function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function div(x,y){
    return x/y;
}
function mul(x,y){
    return x*y;
}
function Command(execute, undo, value){
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}
function AddCommand(value){
    return new Command(add, sub, value);
}
function SubCommand(value){
    return new Command(sub,add,value);
}

function Calculator(){
    var current = 0;
    var commands = [];

    return {
        execute : function(command){
            commands.push(command);
            current = command.execute(current, command.value);
            var name = command.execute.toString().slice(9,12);
            console.log(`Performing ${name} operation on data ${command.value}`)
        },
        undo : function(){
            var command = commands.pop();
            var name = command.execute.toString().slice(9,12);
            console.log(`Performing undo ${name} operation on data ${command.value}`)
            current = command.undo(current, command.value);
        },
        getCurrentValue : function(){
            return current;
        }
    }
}

function run(){
    var calculator = Calculator();
    calculator.execute(new AddCommand(5));
    calculator.execute(new AddCommand(16));
    console.log("current value---> "+calculator.getCurrentValue());
    calculator.undo();
    //calculator.undo();
    console.log("current value---> "+calculator.getCurrentValue());

}

run();