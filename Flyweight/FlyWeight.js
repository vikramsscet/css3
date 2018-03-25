let initialMemory = process.memoryUsage().heapUsed;
var names = ["vikram", "Satish", "Patra", "Rohit", "Vijay"];
var projects = ["P1","P2","P3","P4","P4","P5","P6"];
var priorities = [1,2,3,4,5];
var completed = [true,false];

var Task = function(){
    
    var tasks = []
    return {
        add(taskData){
            tasks.push(taskData);
        },
        get(name){
            return tasks.find(function(task){
               return task.name === name; 
            });
        },
        getCunt(){
           return tasks.length; 
        }
    }
}

var taskObj = Task();

for(let i=0; i<100000; i++){
    let taskData = {
        name : names[Math.floor(Math.random()*5)],
        project : projects[Math.floor(Math.random()*6)],
        priority : priorities[Math.floor(Math.random()*5)],
        completed : completed[Math.floor(Math.random()*2)]
    }
    taskObj.add(taskData);
}
console.log(taskObj.getCunt());
let afterMemory = process.memoryUsage().heapUsed;

console.log(`Total memory used : ${(afterMemory - initialMemory)/1000000} MB`);