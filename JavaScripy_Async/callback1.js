function upperCase(name,callback){
    let n=name.toUpperCase();
    //console.log(`Name is : ${n}`)
    callback(n);
}

function display(n){
 console.log(n);
}

upperCase("Rajkumar",display);

console.log('------------------Second Exapmle of Callback function----------')
function abc(callback){
    callback(number);
}

function showNumber(number){
    console.log(`number is `.number);
}
abc();

