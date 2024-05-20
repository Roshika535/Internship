// nepal driving license

const checkeligibility = (age) => {
    if (age >= 18) {
        console.log("eligible");
    } else {
        console.log("not eligible");
    }
}
checkeligibility(30);

// exception handling
const error = () => {
    try {
     dadalert("hello");
    }
    catch (error) {
        console.log("error occured");
    }
}

error();


// 
const details2019={
    name: "roshika",
    age: 19,
    weight: "53kg", 
    height: 5.0, 
}
console.log(details2019);
const details2024={
    ...details2019,age:23,weight:"50kg",height:5.1
}
console.log(details2024);

 