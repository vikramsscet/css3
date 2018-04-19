let add = (x,y) => (x + y);
let sub = (x,y) => (x - y);
let mul = (x,y) => x * y;
let div = (x,y) => x / y;

//Command (maintains information about the action to be taken)
function Command(execute, undo, value){
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}

let AddCommand = value => new Command(add, sub, value);
let SubCommand = value => new Command(sub, add, value);
let MulCommand = value => new Command(mul, div, value);
let DivCommand = value => new Command(div, mul, value);
 
//Reciever (knows how to carry out the operation associated with the command)
let Calculator = ()=>{
    let current = 0;
    let commands = [];
    let getOperation = (command)=>{
        //console.log(command.execute.toString());
        return command.execute.toString().slice(12,13);
    }
    return {
        execute(command){
            //console.log(command);
            commands.push(command);
            current = command.execute(current, command.value);
            console.log(`Executing ${getOperation(command)} operation and result is ${this.getCurrent()}`);
        },
        undo(){
            let command = commands.pop();
            current = command.undo(current, command.value);
            console.log(`Undoing ${getOperation(command)} operation and result is ${this.getCurrent()}`);
        },
        getCurrent(){
            return current;
        }
    }
}
//Client (references the Receiver object)
let run = ()=>{
    let calc = Calculator();
    calc.execute(AddCommand(5));
    calc.execute(AddCommand(51));
    calc.undo();
    console.log("Current calue : "+calc.getCurrent());
}
//Invoker
run();

module.exports = { Calculator, add, sub};