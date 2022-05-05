
//PART PÀGINA CARRITO

let variableNumero = 1;
            //////////////////////FUNCIÓ PER SUMAR I FUNCIÓ PER RESTAR LA QUANTIAT DE PIZZES DEL CARRO //////////////////////////////
    function sumardiv1() {
    variableNumero++                    
    document.getElementById("number1").innerHTML = `${variableNumero}`;
    multiplicar()
   
    }
    
    function restardiv1() {
        if (variableNumero <= 0){
            variableNumero = 0
        } else {
            variableNumero--
            document.getElementById("number1").innerHTML = `${variableNumero}`;
        }
        
        multiplicar()
    }

let variableNumero2=1;
    function sumardiv2() {
    variableNumero2++
    document.getElementById("number2").innerHTML = `${variableNumero2}`;
    multiplicar()
    }
    function restardiv2() {
        if (variableNumero2 <= 0){
            variableNumero2 = 0
        } else {
            variableNumero2--
            document.getElementById("number2").innerHTML = `${variableNumero2}`;
        }
        multiplicar()
    }
let variableNumero3=1;
    function sumardiv3() {
    variableNumero3++
    document.getElementById("number3").innerHTML = `${variableNumero3}`;
    multiplicar()
    }
    function restardiv3() {
        if (variableNumero3 <= 0){
            variableNumero3 = 0
        } else {
            variableNumero3--
            document.getElementById("number3").innerHTML = `${variableNumero3}`;
        }
        multiplicar()
    }


let variableNumero4=1;
    function sumardiv4() {
    variableNumero4++
    document.getElementById("number4").innerHTML = `${variableNumero4}`;
    multiplicar()
    }
    function restardiv4() {
        if (variableNumero4 <= 0){
            variableNumero4 = 0
        } else {
            variableNumero4--
            document.getElementById("number4").innerHTML = `${variableNumero4}`;
        }
        multiplicar()
    }

    //////////////////////////////////////FUNCIÓ PER MULTIPLICAR PREU X QUANTITATS//////////////////////////////////////////////////////////////
function multiplicar(){
    let preuCalifornia = document.querySelector("#california").innerHTML;
    let preuGreek = document.querySelector("#greek").innerHTML;
    let preuSicilian = document.querySelector("#sicilian").innerHTML;
    let preuLouis = document.querySelector("#louis").innerHTML;
    let tax = document.getElementById("tax").innerHTML;
    let delivery = document.getElementById("delivery").innerHTML;

    
    let total = (variableNumero*parseFloat(preuCalifornia))+(variableNumero2*parseFloat(preuGreek))+(variableNumero3*parseFloat(preuSicilian))+(variableNumero4*parseFloat(preuLouis))
    document.getElementById("totalprice").innerHTML = total.toFixed(2)
    let totaltotal = total + parseFloat(tax) + parseFloat (delivery)
    document.getElementById("totaltotalprice").innerHTML = totaltotal.toFixed(2)
}


/////////////////////////////////////PART PÀGINA PRINCIPAL (AFEGIR A CARRITO) ///////////////////////////////////////////   

let numcart = 0
function sumarCarrito(){
    numcart++
    document.getElementById("cartnum").innerHTML = `${numcart}`;
    verDivCarrito ()
}


function ocultarDivCarrito (){
    document.getElementById("cartnum").style.display = 'none'
    }
    
function verDivCarrito (){
    document.getElementById("cartnum").style.display = '';
    }    
    

function hideButtonAdd1 (){
    document.getElementById("addpizza1").style.display = 'none'
    }
function hideButtonAdd2 (){
    document.getElementById("addpizza2").style.display = 'none'
    }
function hideButtonAdd3 (){
    document.getElementById("addpizza3").style.display = 'none'
    }
function hideButtonAdd4 (){
    document.getElementById("addpizza4").style.display = 'none'
    }

function oops (){
    alert("OOooOooops, no hem acabat el treball, no podeu comprar pizzes amb nosaltres.")
}
                ///////////////////////////FUNCIÓ PER POSAR TOTES LES QUANTITATS DE PIZZA A 0 ///////////////////////////////
function clearAll(){
    variableNumero = 0
    variableNumero2 = 0
    variableNumero3 = 0
    variableNumero4 = 0
    document.getElementById("number1").innerHTML = `${variableNumero}`;
    document.getElementById("number2").innerHTML = `${variableNumero2}`;
    document.getElementById("number3").innerHTML = `${variableNumero3}`;
    document.getElementById("number4").innerHTML = `${variableNumero4}`;
    multiplicar();
}
    /////////////////////////////////////////////////TODOLIST (PIZZES)////////////////////////////////////////////////////////////////////////

    //INTENTAR APLICAR TO DO LIST A LA APP 
    let ListOfPizzas = [
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

   //Preus fixes
let mockDeliveryCharge = '1.00 €';
let mockTax = '0.50 €';

let checkoutFlag = false;
let purchaseCount = 0;
let purchasePrice = 0;
let totalPrice = 0;

//Array de llista de la compra iniciliatizat per fer el push
let shoppingList = [];

//Trobar i guardar en una variable el contenidor on anirà
//tot l'html que creem amb el js

const wrapper = document.getElementsByClassName("wrapper")[0];
//Funció per renderitzar les cards del menú

function renderCard(name, ingredient, path, price, i) {
    const cardContainer = document.getElementById('card_container');
    let card = `<div id="card_${i + 1}" class="card-box">
                    <div class="img-inner">
                        <img class="foto-pizza" src=${path}>
                    </div>
                    <div class="text-container">
                        <div class="card_text_row">
                            <h3>${name}</h3>
                            <p class="card-subtitle">${ingredient}</p>
                        </div>
                        <div class="card_items_row">
                            <p class="price_text">${price}</p>
                            <div id ="add_button" onclick="addItemToShoppingList('${name}', '${ingredient}', '${path}', '${price}', ${i}); updateCheckout('shopping_wrapper'); getAmount(); getPrice()" class="add_button">+</div>
                        </div>
                    </div>
                </div>`
    cardContainer.innerHTML = card

    renderCard()
}
          












  


    







   



