class burger
{
    constructor(burgerType,burgerCategory){
        this.burgerType=burgerType;
        this.burgerCategory=burgerCategory;
        this.quantity = 1;
    }
}

var cartItems = new Array();

setCartItems = function(){
    if(!localStorage.getItem("cartItems")){
        return;
     }
     cartItems = JSON.parse(localStorage.getItem("cartItems"));        
}

Array.prototype.findIndex = function(value){

    for(var i=0; i< this.length; i++)
    {
        if((this[i].burgerType === value.burgerType) && (this[i].burgerCategory === value.burgerCategory))
        {
            return i; 
        }  
    }
    return -1;

}

Array.prototype.add = function(indexInCart)
{
    if(this[indexInCart].quantity < 5)
    {
        this[indexInCart].quantity++;
    }
    else
    {
        alert("Per Customer Limit "+this[indexInCart].burgerType+" ( "+this[indexInCart].burgerCategory+" )"+" burger is 5.");
    }
}

var addToCart = function()
{
    var children = this.parentNode.parentNode.childNodes;
    var burgerType = children[1].innerText;
    var burgerCategory = children[5].childNodes[1].value;
    var indexInCart = cartItems.findIndex(new burger(burgerType, burgerCategory));

    if(indexInCart !== -1){
        cartItems.add(indexInCart);
    }
    else
    {
        cartItems.push(new burger(burgerType,burgerCategory));
    }
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
}


show = function(){

    if(!localStorage.getItem("cartItems")){
       alert("Cart is empty !! ");
       return;
    }
   
    window.location.href="./cart.html";
}



window.onload = setCartItems();

var buttons = document.getElementsByClassName("btn");
for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click',addToCart);
}
document.getElementById("show").addEventListener('click',show);
