//Declaring Global Variable
var data1="Rahul";  
var data2="Soonu";

function displayData(){
    console.log(data1+" : "+data2);
}

function addData(){
    var add = data1+data2; //Local Variable
    console.log(add);
}

displayData();
addData();

// Declaring Global Variable in side function with Window Object works with Browser

function cityNames(){
    window.city1="Mumbai";
    window.city2="Jaunpur";
    window.city3="Bhopal";
}

function printCityNames(){
    console.log("city1 : "+window.city1+"city2 : "+window.city2+"city3 : "+window.city3);
}printCityNames();

