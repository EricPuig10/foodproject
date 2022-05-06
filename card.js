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
            <button onClick="addToCart('${pizza.name}', '${pizza.ingredient}', '${pizza.photo}', '${pizza.price}', '${pizza.i}')" class="more"> + </button>
        </div>
        </div>`
    }

    const cardContainer = document.getElementById('card_container');


    cardContainer.innerHTML = html
}




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
    if (shoppingList.length == 0) {
        shoppingList.push(addedItem);
        console.log(shoppingList);

    } else {

        let indexArr = [];
        //Guardo posició inicial de totes les pizzes de la llista de la compra
        for (let i = 0; i < shoppingList.length; i++) {
            indexArr.push(shoppingList[i]["index"]);
        }
        //Guardo la posició inicial del nou item
        let indexNewItem = addedItem["index"];
        //Comprovo si la posició inicial del nou item ja està entre les pizzes que tinc a la llista de la compra
        if (!(indexArr.includes(indexNewItem))) {
            //Si no hi és, l'afegeixo tal qual
            shoppingList.push(addedItem);

        } else {
            //Si hi és, enlloc d'afegir-lo, sumo una pizza al contador
            let shoppingListPos = indexArr.indexOf(indexNewItem);
            shoppingList[shoppingListPos]["count"]++;
            
        }
    }

    console.log('Shopping list:', shoppingList)
}


function renderShoppingList(name, ingredient, photo, price, i, count) {
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
            <p class="pizzaCartPrice">${pizzaCart.price}</p>
        </div>
        <div class="adjustQuantity">
            <botton class="morebut" onclick= "sumardiv1()">+</botton>
            <h5 class="pizzaCartQuantity" id="itemCount_${pizzaCart.i}">${pizzaCart.count}</h5>
            <botton class="lessbut" onclick="restardiv1()">-</botton>  
        </div>
    </div>`
    }

    const cardContainer = document.getElementById("cartView")
    

    cardContainer.innerHTML = html
}




document.addEventListener('DOMContentLoaded', () => {

 

for(let i = 0; i<listOfPizzas.length; i++){
    let pizza = listOfPizzas[i];
    let pizzaName = pizza["name"];
    let pizzaIngredient = pizza["ingredient"]
    let pizzaPhoto = pizza["photo"]
    let pizzaPrice = pizza["price"]
    renderCard(pizzaName, pizzaIngredient, pizzaPhoto, pizzaPrice, i);
}
})
