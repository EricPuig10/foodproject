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

        html += `<div class="pizzachoose1">
        <img class="fotopizza" src="${pizza.photo}" alt="fotopizza">
        <div class="shadow">
            <h4 class="titlepizza">${pizza.name}</h4>
            <h5>${pizza.ingredient}</h5>
            <h6>${pizza.price}</h6>
            <button onClick="addToCart('${pizza.name}', '${pizza.ingredient}', '${pizza.photo}', '${pizza.price}', ${pizza.i})" class="more"> + </button>
        </div>
        </div>`
    }

    const cardContainer = document.getElementById('card_container');


    cardContainer.innerHTML = html
}

renderCard();


let shoppingList = []

function addToCart(name, ingredient, photo, price, index) {
    let addedItem = {
        "name": name,
        "price": price,
        "ingredient": ingredient,
        "photo": photo,
        "count": 1,
        "index": index
    }
    shoppingList.push(addedItem);
    console.log(shoppingList);  

}


function renderShoppingList(name, ingredient, photo, price, i) {
    let html= `<header>
    <div class="top">
        <button id="clear" onclick="clearAll()">Clear All</button>
        <button id="close" onclick="location.href='./index.html'">x</button>
    </div>
    
    <div>
        <h1>Your Cart <br> Food </h1>
    </div>
</header>`;

    for (const pizzaCart of shoppingList){

        html += `<div class="divPizzaCart">
        <div class="pizza">
            <img class="pizzafoto" src="${pizzaCart.photo}">
        </div>
        <div class="pizzainfo">
            <p class="pizzaCartName">${pizzaCart.name}</p>
            <p class="pizzaCartIngredient">${pizzaCart.ingredient}<p>
            <p class="pizzaCartPrice">$<span id="california">${pizzaCart.price}</span></p>
        </div>
        <div class="quantity">
            <botton class="morebut" onclick= "sumardiv1()">+</botton>
            <h5 class="pizzaCart" id="number1">1</h5>
            <botton class="lessbut" onclick="restardiv1()">-</botton>  
        </div>
    </div>`
    }

    const cardContainer = document.getElementById("cartView")
    

    cardContainer.innerHTML = html
}





