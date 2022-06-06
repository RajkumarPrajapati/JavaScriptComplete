const name = "Ramesh";
console.log(name);
// name = "Ram"; we can not re-assign const variable
console.log(name);

const city=["Bhopal","Jaunpur","Mumbai","Assam","Jaipur"];
console.log(city);
city[0]="Indore";  //We can update the velue on const array
console.log(city);
city.push("Romania"); // We can push new element into const array
console.log(city);

//const city=["A","B"];  We can not create const array with same name or re-assign const Array
console.log(city);

// Const Objects in JavaScript
const obj ={name:"Rajkumar",age:21,mob:9795836839,address:"Bhopal"}
console.log(obj);
obj.address="Mumbai";// We can update the properties of const Objects
console.log(obj);

