// In this Example we are going to the function are execute in the sequence they arw called 
function fun1(name){
    console.log(name);

}
function fun2(abc){
    console.log(abc);
}
fun2("Calling Second Function");
fun1("Calling First Function");