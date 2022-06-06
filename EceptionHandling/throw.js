function forVote(){
    var age=13;
 try{
    if(age<18) throw "You are not eligible for vote"

    else{
        console.log("Welcome to vote");
    }

}catch(error){
    console.log("Error is : "+error);
}
}

forVote();