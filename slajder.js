var i=0;
//var x = document.createElement("IMG");
//var divtest = document.createElement("DIV");
var timer1 = 0;
var timer2 = 0;


// function obrazek()
// {
//     x.setAttribute("id", "slide");
//     x.setAttribute("width", "100%");
//     x.setAttribute("height", "600");    
// }

function zmienSlajd()
{
    i++;
    if(i > 3) 
    {
        i = 1;
    }	
    
    // x.setAttribute("src", 'pictures/header/'+i+'.jpg');
    $("#slide").fadeIn(500);	
    timer1 = setTimeout("zmienSlajd()", 3000);
    timer2 = setTimeout("schowaj()",2500);
    isSelected(i);
}

function schowaj()
{
    $("#slide").fadeOut(500);
}

// function wypiszNumery()
// {    
//     var tab = [];
   
//     for (i=1; i<=3; i++)
//     {
//         tab[i] = document.createElement("button");             
//         tab[i].setAttribute("id", i);
//         tab[i].setAttribute("class", 'button1 mr-3'+' btn'+i);
//         tab[i].textContent=" "; 
//         var divek = document.body.appendChild(divtest);
//         divtest.setAttribute('id','div1');
//         var spanek = document.getElementById("div1").appendChild(tab[i]);       
      
//     }     

    
//     document.getElementById(1).onclick = function() {pokazObrazek(1)};      
//     document.getElementById(2).onclick = function() {pokazObrazek(2)};      
//     document.getElementById(3).onclick = function() {pokazObrazek(3)};      
    
//}

function pokazObrazek(nrId) 
{
   // document.getElementById(nrId).innerHTML = "YOU CLICKED ME!";
   
    clearTimeout(timer1);
    clearTimeout(timer2);
    i=nrId-1;
    schowaj();
    setTimeout("zmienSlajd()",500);
}  

// function move()
// {
//     var my_nav = document.getElementById("header");
//     my_nav.appendChild(x);
//     my_nav.appendChild(divtest);
// }


