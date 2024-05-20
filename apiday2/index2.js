fetch("https://dummyjson.com/users")
.then ((res)=>{
    return res.json()
})
.then ((data)=>{
    console.log(data);
    const newdata=data.users;

    console.log(newdata);

    let rows="";

    newdata.forEach(element => {
        rows += `<tr><td>${element.id}</td> <td>${element.firstName}</td> <td>${element.lastName}</td> <td>${element.maidenName}</td>  <td>${element.age}</td> <td>${element.gender}</td> <td>${element.email}</td> <td>${element.username}</td> <td>${element.password}</td> <td>${element.birthDate}</td> <td><img src= ${element.image}></td> <td>${element.hair['color']}</td>   </tr>`;

        
    });

    document.getElementById("tbody").innerHTML=rows;

})
