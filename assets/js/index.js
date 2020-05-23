function $(id){
    return document.getElementById(id);
}

function buttonState(){
    if(this.value.length == 10)
    {
        $("mobNoSubmit").disabled = false;
    }
    else
    {
        $("mobNoSubmit").disabled = true;
    }
    
}

function restrictNumber() {  
    var newValue = this.value.replace(new RegExp(/[^\d]/,'ig'), "");
    this.value = newValue;
}

function login(){
    window.open("./products.html","_self");
}

$("mobNoSubmit").disabled = true;

$("mobNo").addEventListener('input', restrictNumber);
$("mobNo").addEventListener('input', buttonState);

$("mobNoSubmit").addEventListener('click', login);