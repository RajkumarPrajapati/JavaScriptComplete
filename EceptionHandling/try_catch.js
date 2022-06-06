var x=10;
var y=0;

function divide(){
    try{
    var sub=x/y;
    addNumber(); //Throwing error because addNumber is not Defind
    }catch(error){
        console.log("Error Nessage : "+error.message);
        console.log("Error Name : "+error.name)
    }
}
divide();
