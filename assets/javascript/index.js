var Q = ["What is the shortform of HTML?<br/>","What is the other name for javascript?<br/>","Is C++ a low level language?<br/>"];





var a1=["<button class=btn1 onclick=Q0c()>HTLT</button>",
       "<button class=btn1 onclick=Q1i()>ECMAscript</button>",
       "<button class=btn1 onclick=Q2i()>Yes</button>"];


var a2=["<button class=btn1 onclick=Q0i()>HMLT</button>",
       "<button class=btn1 onclick=Q1i()>JS</button>",
       "<button class=btn1 onclick=Q2c()>No</button>"];


var a3=["<button class=btn1 onclick=Q0i()>MLHT</button>",
        "<button class=btn1 onclick=Q1i()>I don't know</button>"];

// this will display if it's correct or //
var c= ["Correct","Correct","Correct"];
var i= ["False","False","False"];

//question no.

 var n = 0;
 n++; 

//score no.
var s = 0;
s++;

function Start(){
    dissappear1.innerHTML="";
    message.innerHTML="";
    question1.innerHTML=Q[0]
    opt1.innerHTML=a1[0];
    opt2.innerHTML=a2[0];
    opt3.innerHTML=a3[0];
    noq.innerHTML= n++;
    
}

function Q0c(){
    ans1.innerHTML="<div id=like1>"+ c[0] +"</div>";
    opt1.innerHTML="";
    opt2.innerHTML="";
    opt3.innerHTML="";
    score.innerHTML= n++ ;
    
    next1.innerHTML="<button class=btn1 onclick=new1()>Next</button>";
}
function Q0i(){
    ans1.innerHTML="<div id=dis1>"+ i[0] +"</div>";
    opt1.innerHTML="";
    opt2.innerHTML="";
    opt3.innerHTML="";
    next1.innerHTML="<button class=btn1 onclick=new1()>Next</button>";
}
function new1(){
question1.innerHTML=Q[1]
opt1.innerHTML=a1[1];
opt2.innerHTML=a2[1];
opt3.innerHTML=a3[1];
noq.innerHTML= "";
next1.innerHTML="";
ans1.innerHTML="";
}

function Q0c(){
    ans1.innerHTML="<div id=like1>"+ c[0] +"</div>";
    opt1.innerHTML="";
    opt2.innerHTML="";
    opt3.innerHTML="";
    opt4.innerHTML="";
    score.innerHTML=s++
    noq.innerHTML= n++;
    next1.innerHTML="<button class=btn1 onclick=new1()>Next</button>";
}



const btnOption = document.querySelector('.test')

btnOption.addEventListener('click', ()=>{
    alert("you clicked me")
})