var Task = function(name){
	this.name = name;
	this.completed = false;
}
Task.prototype.show = function(){
	console.log(`Showing task ${this.name}`);
}
Task.prototype.save = function(){
	this.completed = true;
	console.log(`Saving task ${this.name} and task status is ${this.completed}`);
}

//Decorator Object
//Without modifying the original Task object.
var UrgentTask = function(name, priority){
	Task.call(this, name);
	this.priority = priority;
}
// If we assigning prototype like this, by modifying any property of UrgentTask will modify the same property of Task object as well. 
//UrgentTask.prototype = Task.prototype; 
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.show = function(){
	console.log(`Showing urgent task priority : ${this.priority} name: ${this.name}`);
}
UrgentTask.prototype.notify = function(){
	console.log(`notifying users...`);
}
UrgentTask.prototype.save = function(){
	this.notify();
	Task.prototype.save.call(this);
	console.log(`Saving urgent task priority is ${this.priority}`);
}

var taskObj = new Task("Primary Task");
taskObj.show();
taskObj.save();

var urgentTaskObj = new UrgentTask("Urgent Task",5);
urgentTaskObj.show();
urgentTaskObj.save();