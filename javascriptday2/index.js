// const student={
// name:"roshika",
// age:23,
// nationality:"Nepali",
// eyeColor:"black",
// fullName:function(){
//     return this.name+" "+this.age;
// },
// };

// console.table(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.nationality);
// console.log(student["eyeColor"]);

// console.log(student.fullName());


const patient={
    name:"roshika",
    age:23,
    nationality:"Nepali",
    bloodGroup:"O+",
    disease:"Diabetes",
    fulldescription:function(){
        return "patient's description: "+ this.name+" "+this.age+" "+this.nationality+" "+this.bloodGroup+" "+this.disease
    },
}

console.log(patient.fulldescription());

var name="roshika";
var lastName="sharma";
var age=23;
var fulldescription= name+" "+lastName+" "+age;

console.log(fulldescription);


// length check
console.log(name.length == lastName.length);

// conditional operator
console.log(name===lastName?"yes":"no");
console.log(90==="90"?"yes":"no");

// typeof
console.log(typeof name);
console.log(typeof age);
console.log(typeof fulldescription);