fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
    const newdata = data;
    console.log(newdata);

    let rows = "";
    newdata.forEach((user) => {
        rows += `<tr><td>${user.id}</td> <td>${user.name}</td> <td>${user.username}</td> <td>${user.email}</td> <td>${user.address['city']}</td> </tr>`;
    });
    document.getElementById("dyanamicdata").innerHTML = rows;
}).catch((err)=>console.log(err));
