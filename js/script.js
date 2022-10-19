window.addEventListener("load", onLoad);

var ecrant1 = document.getElementById("ecran1");
var ecrant2 = document.getElementById("ecran2");
var ecrant3 = document.getElementById("ecran3");
var ecrant4 = document.getElementById("ecran4");

var btnEcran1 = document.getElementById("btEcran1");
var btnEcran2 = document.getElementById("btEcran2");
var btnEcran3 = document.getElementById("btEcran3");

btnEcran1.addEventListener("click",swecrant2,false);
btnEcran2.addEventListener("click",swecrant3,false);
btnEcran3.addEventListener("click",swecrant4,false);

var btRetour2 = document.getElementById("btRetour2");
var btRetour3 = document.getElementById("btRetour3");
var btRetour4 = document.getElementById("btRetour4");

btRetour2.addEventListener("click",swecrant1,false);
btRetour3.addEventListener("click",swecrant2,false);
btRetour4.addEventListener("click",swecrant3,false);



function onLoad(){
    ecrant2.style.display = "none";
    ecrant3.style.display = "none";
    ecrant4.style.display = "none";
}

function swecrant1() {
    ecrant1.style.display = "block";
    ecrant2.style.display = "none";
    ecrant3.style.display = "none";
    ecrant4.style.display = "none";
}

function swecrant2() {
    ecrant1.style.display = "none";
    ecrant2.style.display = "block";
    ecrant3.style.display = "none";
    ecrant4.style.display = "none";
}

function swecrant3() {
    ecrant1.style.display = "none";
    ecrant2.style.display = "none";
    ecrant3.style.display = "block";
    ecrant4.style.display = "none";
}

function swecrant4() {
    ecrant1.style.display = "none";
    ecrant2.style.display = "none";
    ecrant3.style.display = "none";
    ecrant4.style.display = "block";
}