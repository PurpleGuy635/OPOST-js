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

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var option5 = document.getElementById("option5");

option1.addEventListener("click",optionc1,false);
option2.addEventListener("click",optionc2,false);
option3.addEventListener("click",optionc3,false);
option4.addEventListener("click",optionc4,false);
option5.addEventListener("click",optionc5,false);

var selectoption1 = false;
var selectoption2 = false;
var selectoption3 = false;
var selectoption4 = false;
var selectoption5 = false;



function onLoad(){
    ecrant2.style.display = "none";
    ecrant3.style.display = "none";
    ecrant4.style.display = "none";
}

function choption1() {

    if (selectoption1 == false) {option1.style.backgroundColor = 'red';selectoption1 = true;}
    else {option1.style.backgroundColor = 'white';selectoption1 = false;}
    
}

function choption2() {

    if (selectoption2 == false) {option2.style.backgroundColor = 'red';selectoption2 = true;}
    else {option2.style.backgroundColor = 'white';selectoption2 = false;}
    
}

function choption3() {

    if (selectoption3 == false) {option3.style.backgroundColor = 'red';selectoption3 = true;}
    else {option3.style.backgroundColor = 'white';selectoption3 = false;}
    
}

function choption4() {

    if (selectoption4 == false) {option4.style.backgroundColor = 'red';selectoption4 = true;}
    else {option4.style.backgroundColor = 'white';selectoption4 = false;}
    
}

function choption5() {

    if (selectoption5 == false) {option5.style.backgroundColor = 'red';selectoption5 = true;}
    else {option5.style.backgroundColor = 'white';selectoption5 = false;}
    
}

function choix(choix) {

    if (choix == 1) {
        if (selectoption2 == true) {choption2();}
        if (selectoption3 == true) {choption3();}
        if (selectoption4 == true) {choption4();}
        if (selectoption5 == true) {choption5();}
        
        choption1();
    }

    else if (choix == 2) {
        if (selectoption1 == true) {choption1();}
        if (selectoption3 == true) {choption3();}
        if (selectoption4 == true) {choption4();}
        if (selectoption5 == true) {choption5();}
        
        choption2();
    }

    else if (choix == 3) {
        if (selectoption1 == true) {choption1();}
        if (selectoption2 == true) {choption2();}
        if (selectoption4 == true) {choption4();}
        if (selectoption5 == true) {choption5();}
        
        choption3();
    }

    else if (choix == 4) {
        if (selectoption1 == true) {choption1();}
        if (selectoption2 == true) {choption2();}
        if (selectoption3 == true) {choption3();}
        if (selectoption5 == true) {choption5();}
        
        choption4();
    }

    else if (choix == 5) {
        if (selectoption1 == true) {choption1();}
        if (selectoption2 == true) {choption2();}
        if (selectoption3 == true) {choption3();}
        if (selectoption4 == true) {choption4();}
        
        choption5();
    }

    boutonecran1unlock();
    
}

function optionc1() {
    choix(1);
}

function optionc2() {
    choix(2);
}

function optionc3() {
    choix(3);
}

function optionc4() {
    choix(4);
}

function optionc5() {
    choix(5);
}

function swecrant1() {
    ecrant1.style.display = "block";
    ecrant2.style.display = "none";
    ecrant3.style.display = "none";
    ecrant4.style.display = "none";
}

function boutonecran1unlock() {
    btnEcran1.removeAttribute("disabled");
}

function boutonecran2unlock() {
    btnEcran2.removeAttribute("disabled");
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