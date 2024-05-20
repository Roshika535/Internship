const marks=80;
if(marks>=80){
    console.log("Distinction");
}
else if(marks>=60){
    console.log("First division");
}
else if(marks>=50){
    console.log("Second division");
}
else if(marks>=40){
    console.log("Third division");
}
else{
    console.log("Fail");
}

const number=10;
if(number%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

// var a= 10;
// var b= 23;
// var temp=a;
// a=b;
// b=temp;
// console.log(a,b);

const x= 0;
if(x>0){
    console.log("Positive");
}
else if(x<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

var text="";
for(let i=0;i<10;i=i+3){
text="the number is: "+ i + "\n";
console.log(text);
}

var txt1="";
for(let i=0;i<10;i++){
txt1+="*"; 
console.log(txt1);
}

const myfunction=() => {
    console.log("Hello World");
};
// function call
myfunction();



// sum of two numbers
// odd even
// grade finder
// percentage 

// sum of two numbers
const num1=13;
const num2=25;
const sum=() => {
    console.log(num1+num2);
}
sum();

// sum of two numbers
// passing parameters
const add =(numm1,numm2) => {
    console.log(numm1+numm2);
}
add(10,20);

// odd even
const num3=45;
const oddeven=() => {
    if(num3%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
oddeven();

// grade finder
const marks1=52;
const grade=() => {
    if(marks1>=90){
        console.log("Grade A+");
    }
    else if(marks1>=80){
        console.log("Grade A");
    }
    else if(marks1>=70){
        console.log("Grade B+");
    }
    else if(marks1>=60){
        console.log("Grade B");
    }
    else if(marks1>=50){
        console.log("Grade C+");
    }
    else if(marks1>=40){
        console.log("Grade C");
    }
    else{
        console.log("Fail");
    }
}
grade();

// percentage
const n1=70;
const n2=83;
const n3=90
const percentage=() => {
   var percentage=(((n1+n2+n3)/300)*100);
   console.log("Your percentage is: "+percentage + "%");
}
percentage();



