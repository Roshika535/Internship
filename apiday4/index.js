fetch("./clothes.json")
.then((res) =>{
    return res.json();
})
.then((data)=>{
    console.log(data);

    const newdata=data.clothingItems;
    console.log(newdata);

    let rows="";
    newdata.forEach((el)=>{
        rows += `<div class="card">
        <img style="width: 350px; height: 400px;" src="${el.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">Category: ${el.category}</p>
          <p class="card-text">Size: ${el.size}</p>
          <p class="card-text">Color: ${el.color}</p>
          <p class="card-text">Price: ${el.price}</p>
        </div>
      </div>`
    });
    document.getElementById("container").innerHTML=rows;
})