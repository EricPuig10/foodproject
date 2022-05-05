let listOfPizzas = [
    {
        name : "California Pizza",
        price: "$ 8.50",
        ingredient: "Mushroom",
        photo: "./images/pizza2.png",
    },
    {
        name: "Greek Pizza",
        price: "$ 12.99",
        ingredient: "beef",
        photo: "./images/pizzapepp.png",
    },
    {
        name: "Sicilian Pizza",
        price: "$ 7.90",
        ingredient: "Tomato",
        photo: "./images/menueditor_item_47f8847646904252bb75a46fb0871eca_1622334660456700182.jpg" ,
    },
    {
        name: "Louis Pizza",
        price: "$ 4.79",
        ingredient: "Chiken",
        photo: "./images/Beef-n-Onion.png",
    }]

function renderCard(name, ingredient, photo, price, i) {
    let html= "";

    for (const pizza of listOfPizzas){
        console.log(pizza.name)
        html += `<div class="pizzachoose1">
        <img class="fotopizza" src="${pizza.photo}" alt="fotopizza">
        <div class="shadow">
            <h4 class="titlepizza">${pizza.name}</h4>
            <h5>${pizza.ingredient}</h5>
            <h6>${pizza.price}</h6>
            <button onclick="sumarCarrito(), hideButtonAdd1()" class="more" id="addpizza1"> + </button>
        </div>
        </div>`
    }

    const cardContainer = document.getElementById('card_container');


    cardContainer.innerHTML = html
}

renderCard()


let cartArray = []

addPizza(newPizza){
    cartArray.push(newPizza);
    renderCard();
    }
    
     let newPizza = 
     {
        name: ,
     },
     {
        price: ,
     },
     {
        
        ingredient:,
     },
     {
        photo:,
     }
    
    