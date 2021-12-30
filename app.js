const affichage = document.querySelector('.affichage')
let affResult, total;
let val = false;
let add = false;
let multi = false;
let sous = false;
let div = false;


function nbr(value){
    if(val == true){
        affResult = "";
        val = false;
    }
    if(affResult == null){
        affResult = value.toString();
        affichage.innerText = affResult;
    }else{
        affResult = affResult + value.toString();
        affichage.innerText = affResult;
    }
}

function reset(){
    affResult = null;
    val = false;
    total = null;
    resetButton();
    affichage.innerText = affResult;
}

function resetButton(){
    add = false;
    multi = false;
    sous = false;
    div = false;
}

function addition(){
    if(val){
        total = Number(affResult);
    }else{
    if(total != null || total != undefined){
        if(add == true){
            total = total + Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(multi == true){
            total = total * Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(sous == true){
            total = total - Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(div == true){
            total = total / Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }
    }else{
        total = Number(affResult);
    }} 
    val = true;
    resetButton();
    add = true;
}

function egal(){
    if(total != null || total != undefined){
        if(add == true){
            total = total + Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(multi == true){
            total = total * Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(sous == true){
            total = total - Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(div == true){
            total = total / Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }
    }else{
        total = Number(affResult);
    }
}

function multiplication(){
    if(val){
        total = Number(affResult);
    }else{
    if(total != null || total != undefined){
        if(add == true){
            total = total + Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(multi == true){
            total = total * Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(sous == true){
            total = total - Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(div == true){
            total = total / Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }
    }else{
        total = Number(affResult);
    }} 
    val = true;
    resetButton();
    multi = true;
}

function soustraction(){
    if(val){
        total = Number(affResult);
    }else{
    if(total != null || total != undefined){
        if(add == true){
            total = total + Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(multi == true){
            total = total * Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(sous == true){
            total = total - Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(div == true){
            total = total / Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }
    }else{
        total = Number(affResult);
    }} 
    val = true;
    resetButton();
    sous = true;
}

function division(){
    if(val){
        total = Number(affResult);
    }else{
    if(total != null || total != undefined){
        if(add == true){
            total = total + Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(multi == true){
            total = total * Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(sous == true){
            total = total - Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }else if(div == true){
            total = total / Number(affResult);  
            affResult = total.toString();
            affichage.innerText = affResult;
            resetButton();
            val = true;
        }
    }else{
        total = Number(affResult);
    }} 
    val = true;
    resetButton();
    div = true;
}

function point(){
    if(val == true){
        affResult = "";
        val = false;
    }
    if(affResult == null){
        affResult = ".";
        affichage.innerText = affResult;
    }else{
        affResult = affResult + ".";
        affichage.innerText = affResult;
    }
}