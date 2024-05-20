const name=["roshika","sharma"];
name.forEach(element => {
    console.log(element);
});

const student=["roshika","sharma",23,"nepali","black"];
const newstudent=student.map((element)=>{
    return element+" "+"sharma";
})
console.log(newstudent);


const fruits = [
    "Apple", "Banana", "Orange", "Grape", "Strawberry", "Watermelon",
    "Pineapple", "Mango", "Kiwi", "Peach", "Pear", "Cherry", "Plum",
    "Lemon", "Lime", "Blueberry", "Raspberry", "Blackberry", "Cranberry",
    "Apricot", "Fig", "Guava", "Pomegranate", "Coconut", "Papaya",
    "Lychee", "Passionfruit", "Dragonfruit", "Avocado", "Melon",
    "Tangerine", "Nectarine", "Honeydew", "Cantaloupe", "Starfruit",
    "Kumquat", "Persimmon", "Grapefruit", "Rambutan", "Jackfruit",
    "Clementine", "Boysenberry", "Durian", "Elderberry", "Mulberry",
    "Quince", "Loquat", "Feijoa", "Gooseberry", "Soursop",
    "Ackee", "Sapodilla", "Tamarillo", "Physalis", "Cherimoya",
    "Carambola", "Jujube", "Pawpaw", "Salak", "Saskatoon",
    "Langsat", "Mangosteen", "Bilberry", "Cupuaçu", "Pitaya",
    "Pepino", "Cactus Pear", "Custard Apple", "Monstera", "Prickly Pear",
    "Feijoa", "Yangmei", "Sloe", "Santol", "Tamarind",
    "Ugli Fruit", "Yuzu", "Lingonberry", "Miracle Fruit", "Noni",
    "Surinam Cherry", "Mamey Sapote", "Barberry", "Açaí", "Eggfruit",
    "Breadfruit", "African Horned Cucumber", "Bignay", "Buddha's Hand",
    "Burah", "Cempedak", "Chayote", "Cupuaçu", "Gac",
    "Longan", "Marang", "Monstera Deliciosa", "Sapote"
];
console.log(fruits.length);
console.log (fruits[0]);

console.log(fruits.sort().toString());
console.log(fruits.reverse());

// const newfruits=fruits.map((fruits)=>{
//     return fruits.toUpperCase();
    
// });
// console.log(newfruits);


// ascending order ma print garna in uppercase
const newfruits=fruits.map((fruits)=>{
    return fruits.toUpperCase();
    
});
console.log(newfruits.sort().toString());


// array ma chha ki nai vanera check garna
console.log(fruits.includes("Apple"));

// apple ko index check garna
console.log(fruits.indexOf("Apple"));

// index number, kati ota element hataune
const addroshika=fruits.splice(1,1,"roshika");
console.table(fruits);

const info={
    name:"roshika",
    age:23,
    nationalty:"Nepali",
}
console.log(info);
const newinfo={...info,age:20};

console.log(newinfo);



