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

var nb = document.getElementById("inputNb");
var val;

nb.addEventListener("click",modval,false);

var option10 = document.getElementById("option10");
var option11 = document.getElementById("option11");
var option12 = document.getElementById("option12");

option10.addEventListener("click",optionc10, false);
option11.addEventListener("click",optionc11, false);
option12.addEventListener("click",optionc12, false);

var selectoption10 = false;
var selectoption11 = false;
var selectoption12 = false;

var recappx = document.getElementById("recapPrix");
var recapq = document.getElementById("recapQuantite");
var recapd = document.getElementById("recapdurée");

var frecapd = document.getElementById("recapDuree");
var frecapd2 = document.getElementById("recapDuree2");

var prix;
var qut;
var durée;

var frecapdlc1 = document.getElementById("recapOption1");
var frecapdlc2 = document.getElementById("recapOption2");
var frecapdlc3 = document.getElementById("recapOption3");



function onLoad(){
    ecrant2.style.display = "none";
    ecrant3.style.display = "none";
    ecrant4.style.display = "none";
}


function prixrécup(){
    var y;

    if (selectoption1 == true) {y =1}
    else if (selectoption2 == true) {y =2}
    else if (selectoption2 == true) {y =3}
    else if (selectoption2 == true) {y =4}
    else if (selectoption2 == true) {y =5}


    switch (y) {
        case (1):
            prix = 1.90;
            break;
        case (2):
            prix = 1.80;
            break;
        case (3):
            prix = 1.70;
            break;
        case (4):
            prix = 1.60;
            break;
        case (5):
            prix = 1.50;
            break;
    }
}

function récupdurée() {
    var y;

    if (selectoption1 == true) {y =1}
    else if (selectoption2 == true) {y =2}
    else if (selectoption2 == true) {y =3}
    else if (selectoption2 == true) {y =4}
    else if (selectoption2 == true) {y =5}


    switch (y) {
        case (1):
            durée = "1 Mois";
            break;
        case (2):
            durée = "3 Mois";
            break;
        case (3):
            urée = "6 Mois";
            break;
        case (4):
            urée = "9 Mois";
            break;
        case (5):
            durée = "1 An";
            break;
    }
}

function récupquant() {

    qut = val;

}

function majecran4() {
    prixrécup();
    récupdurée();
    récupquant();

    recappx.innerText = prix + " €";
    frecapd2.innerHTML = durée;
    frecapd.innerHTML = durée;
    recapq.innerHTML = qut;

    if (selectoption10 == true) {
        frecapdlc1.style.display = "block";
        frecapdlc2.style.display = "none";
        frecapdlc3.style.display = "none";
    }
    if (selectoption11 == true) {
        frecapdlc1.style.display = "none";
        frecapdlc2.style.display = "block";
        frecapdlc3.style.display = "none";
    }
    if (selectoption12 == true) {
        frecapdlc1.style.display = "none";
        frecapdlc2.style.display = "none";
        frecapdlc3.style.display = "block";
    }
    
}

function modval() {
    val = nb.value;
    boutonecran2unlock();

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

function optionc10() {
    choix2(10);
}

function optionc11() {
    choix2(11);
}

function optionc12() {
    choix2(12);
}

function choix2(choix) {

    if (choix == 10) {
        if (selectoption12 == true) {choption12();}
        choption10();

        if (selectoption11 == true) {
            choption12();
            choption10();
            choption11();
        }
    }

    if (choix == 11) {
        if (selectoption12 == true) {choption12();}
        choption11();

        if (selectoption10 == true) {
            choption12();
            choption10();
            choption11();
        }
    }

    if (choix == 12) {
        if (selectoption10 == true) {choption10();}
        if (selectoption11 == true) {choption11();}
        
        choption12();
    }

    
    
}

function choption10() {

    if (selectoption10 == false) {option10.style.backgroundColor = 'red';selectoption10 = true;}
    else {option10.style.backgroundColor = 'white';selectoption10 = false;}
    
}

function choption11() {

    if (selectoption11 == false) {option11.style.backgroundColor = 'red';selectoption11 = true;}
    else {option11.style.backgroundColor = 'white';selectoption11 = false;}
    
}

function choption12() {

    if (selectoption12 == false) {option12.style.backgroundColor = 'red';selectoption12 = true;}
    else {option12.style.backgroundColor = 'white';selectoption12 = false;}
    
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

    majecran4();
}