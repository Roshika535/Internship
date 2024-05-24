// const myasyncfunction =async() => {
//     await console.log("first")
//     console.log("second")
//     console.log("third")
// }
// console.log("fifth")
// myasyncfunction();
// console.log("fourth")


const radio=() => {
    console.log("speaker")
    console.log("antenna")

}
const tv= async() => {
    radio();
    setTimeout(() => {
        console.log("screen")
    }, 3000);

}
const laptop= () => {
    tv();
    console.log("laptop")
}
laptop();

