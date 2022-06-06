var a = 30;

function addNumber(){
    try{
    var c=a/b;
    }catch(error){
        console.log("Error is : "+error.message);
        console.log("Error is : "+error.name);
    }
    finally{
        console.log("i am finally");
    }
}

addNumber();