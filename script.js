let students=[];

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="teacher" && pass==="1234"){
document.getElementById("login").style.display="none";
document.getElementById("app").style.display="block";
}else{
alert("Wrong login");
}

}

function calculateGrade(avg){

if(avg>=80) return "A";
if(avg>=70) return "B";
if(avg>=60) return "C";
if(avg>=50) return "D";
return "E";

}

function saveStudent(){

let name=document.getElementById("studentName").value;
let scores=document.querySelectorAll(".score");

let total=0;

scores.forEach(s=>{
total+=Number(s.value);
});

let avg=(total/scores.length).toFixed(1);

let grade=calculateGrade(avg);

students.push({name,avg,grade});

displayStudents();

}

function displayStudents(){

let table=document.getElementById("records");

table.innerHTML=`
<tr>
<th>Name</th>
<th>Average</th>
<th>Grade</th>
</tr>
`;

students.forEach(s=>{

let row=table.insertRow();

row.insertCell(0).innerText=s.name;
row.insertCell(1).innerText=s.avg;
row.insertCell(2).innerText=s.grade;

});

}

function downloadSheet(){

let csv="Name,Average,Grade\n";

students.forEach(s=>{
csv+=`${s.name},${s.avg},${s.grade}\n`;
});

let blob=new Blob([csv],{type:"text/csv"});

let a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="performance_report.csv";
a.click();

}
