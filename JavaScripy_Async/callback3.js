students=[
    {name:"Rajkumar", address:"Mumbai"},
    {name:"Neelam", address:"Bhopal"}
]

function displayStudent(){
    setTimeout(function(){
        for(var i=0;i<=students.length;i++){
            console.log(students[i]);
        }
    },4000);
   
}

function addStudent(std,callback){
    setTimeout(function(){
        students.push(std);
        console.log("Student added successfully");
        callback();
    },2000);
   
};

let student={name:"Rohan",address:"Jaunpur"};
addStudent(student,displayStudent)
//displayStudent();