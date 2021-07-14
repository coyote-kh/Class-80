name_student_array =[];

function submit(){
var name_1= document.getElementById("name_student1").value;
var name_2= document.getElementById("name_student2").value;
var name_3= document.getElementById("name_student3").value;
var name_4= document.getElementById("name_student4").value;

name_student_array.push(name_1);
name_student_array.push(name_2);
name_student_array.push(name_3);
name_student_array.push(name_4);

console.log(name_student_array);
document.getElementById("empty").innerHTML=name_student_array;

document.getElementById("submit1").style.display="none";
document.getElementById("sort1").style.display="inline-block";
}

function sorted(){
    name_student_array.sort();
    console.log(name_student_array);

    document.getElementById("empty").innerHTML=name_student_array;
}
