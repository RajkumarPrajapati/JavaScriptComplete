console.log("Hello World!");

function goodMorning(name){
	console.log("Good Morning " +name+" Welcome to our Companey");
}

function greet(name1, thanks){
	console.log("Happy Birthday " +name1+" Wish you a very happy Birthday." +thanks);
	return 'Love You';
}

let msg = function(message){
	console.log(message);
}

let name = 'Rajkumar Prajapati';
let name1 = 'Neelam Prajapati'; 
let message = 'Hello welcome to Home!';

goodMorning(name);
let functionReturn = greet(name1,'Thanks you very Much!');
console.log("Function Returning " +functionReturn);
msg(message);

//function inside Object
const obj = {
	name:'Rajkumar',
	game :function(){
		return 'PUBG, GTA, DOTA, FREEFIRE';
	}
}

console.log(obj.game());

arr g = ['GTA','PUBG','FORT NIGHT','FREEFIRE'];
g.forEach(function(element,index,array){
	console.log(element, index);
});