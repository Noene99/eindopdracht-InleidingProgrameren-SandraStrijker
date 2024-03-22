//EINDOPDRACHT 2

//aantal zetten///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//verhogen aantal zetten
let aantalZetten = 0;
const aantalZettenVeld = document.querySelector('#aantalZettenVeld');

function verhoogZetten() {
    aantalZetten++;
    aantalZettenVeld.textContent = aantalZetten;//hier moet een functie komen  waarin het aantal zetten wordt verhoogd wanneer er 2 kaarten zijn omgedraaid
    if (aantalZetten === 1) {
        //pas als de eerste zet is gedaan begint de timer met lopen
        startTimer();
        statusTimerAan = true;
        //eventlistener op pauzeerbutton pas toevoegen nadat de eerste zet is gedaan
        pauzeerButton.addEventListener('click', pauzeerHervat);
    }
}



//timer////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let timerStart = 0;
let timer;
const secondenVeld = document.querySelector('#secondenVeld');

function countSecondsUp() {
    timerStart++;
    secondenVeld.textContent = timerStart;
}

function startTimer() {
    timer = setInterval(countSecondsUp, 1000);
}

//Timer activeren na omdraaien eerste kaart



//pauzeer de tijd
const pauzeerButton = document.querySelector('#pauzeerHervat');
let statusTimerAan = true; //globale variabele // boolean // status timer

function pauzeerHervat(){
    if(statusTimerAan == true) {
        clearInterval(timer);
        statusTimerAan = false;
        document.querySelector("#pauzeerHervat").textContent = "Hervat";
    } else {
        timer = setInterval(countSecondsUp, 1000);
        statusTimerAan = true;
        document.querySelector("#pauzeerHervat").textContent = "Pauzeer";
    }
}




//omdraaien van kaarten//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CONSTANTEN EN VARIABELEN

const pip = new Audio('audio/pip.mp3') 
const kidsCheering = new Audio('audio/kidscheering.mp3');
/*
let kaart1 = document.querySelector('#kaart1'); //selecteer plaatje 1 
let kaart2 = document.querySelector('#kaart2'); //selecteer plaatje 2
let kaart3 = document.querySelector('#kaart3'); //selecteer plaatje 3 
let kaart4 = document.querySelector('#kaart4'); //selecteer plaatje 4 
let kaart5 = document.querySelector('#kaart5'); //selecteer plaatje 5 
let kaart6 = document.querySelector('#kaart6'); //selecteer plaatje 6 
let kaart7 = document.querySelector('#kaart7'); //selecteer plaatje 7 
let kaart8 = document.querySelector('#kaart8'); //selecteer plaatje 8 
let kaart9 = document.querySelector('#kaart9'); //selecteer plaatje 9 
let kaart10 = document.querySelector('#kaart10'); //selecteer plaatje 10 
let kaart11 = document.querySelector('#kaart11'); //selecteer plaatje 11 
let kaart12 = document.querySelector('#kaart12'); //selecteer plaatje 12 
*/

/*const alleKaarten = [];

for (let i = 1; i <= 12; i++) {
    alleKaarten.push(document.querySelector(`#kaart${i}`));
}

function klikEnDraai(kaart, index) {
    kaart.addEventListener('click', function() {
        omdraaienKaart(kaart, index + 1);
    });
}

function omdraaienKaart(kaart, kaartNummer) {
    if(statusTimerAan){
        const afbeelding = kaart.classList.contains('omgedraaid') ? 'achterkant-kaart.png' : `hondje${kaartNummer}.jpg`;
        kaart.src = `images/${afbeelding}`;
        kaart.classList.toggle('omgedraaid');
        pip.play();
        verhoogZetten();
        checkEindeSpel();
    }
}

alleKaarten.forEach(klikEnDraai);
*/
const alleKaarten = [kaart1, kaart2, kaart3, kaart4, kaart5, kaart6, kaart7, kaart8, kaart9, kaart10, kaart11, kaart12];

//EVENTLISTENER OP KAARTEN

kaart1.addEventListener('click', omdraaienKaart1);
kaart2.addEventListener('click', omdraaienKaart2);
kaart3.addEventListener('click', omdraaienKaart3);
kaart4.addEventListener('click', omdraaienKaart4);
kaart5.addEventListener('click', omdraaienKaart5);
kaart6.addEventListener('click', omdraaienKaart6);
kaart7.addEventListener('click', omdraaienKaart7);
kaart8.addEventListener('click', omdraaienKaart8);
kaart9.addEventListener('click', omdraaienKaart9);
kaart10.addEventListener('click', omdraaienKaart10);
kaart11.addEventListener('click', omdraaienKaart11);
kaart12.addEventListener('click', omdraaienKaart12);


//FUNCTIE OMDRAAIEN KAARTEN VAN ACHTER NAAR VOOR /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function omdraaienKaart1() {
    if(statusTimerAan && !controleerClassInLijst()){ //als er nog kaartjes zijn die niet omgedraaid zijn en de timer loopt kan je kijken of het kaartje mag worden omgedraaid of niet. Anders kan je uberhaupt niks doen met de kaartjes.
        if (kaart1.classList.contains('omgedraaid')) {
            kaart1.classList.remove('omgedraaid');
            kaart1.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart1.src = 'images/hondje1.jpg';
            kaart1.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart2(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart2.classList.contains('omgedraaid')) {
            kaart2.classList.remove('omgedraaid');
            kaart2.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart2.src = 'images/hondje2.jpg';
            kaart2.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart3(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart3.classList.contains('omgedraaid')) {
            kaart3.classList.remove('omgedraaid');
            kaart3.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart3.src = 'images/hondje3.jpg';
            kaart3.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart4(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart4.classList.contains('omgedraaid')) {
            kaart4.classList.remove('omgedraaid');
            kaart4.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart4.src = 'images/hondje4.jpg';
            kaart4.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart5(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart5.classList.contains('omgedraaid')) {
            kaart5.classList.remove('omgedraaid');
            kaart5.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart5.src = 'images/hondje5.jpg';
            kaart5.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart6(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart6.classList.contains('omgedraaid')) {
            kaart6.classList.remove('omgedraaid');
            kaart6.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart6.src = 'images/hondje6.jpg';
            kaart6.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart7(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart7.classList.contains('omgedraaid')) {
            kaart7.classList.remove('omgedraaid');
            kaart7.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart7.src = 'images/hondje7.jpg';
            kaart7.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart8(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart8.classList.contains('omgedraaid')) {
            kaart8.classList.remove('omgedraaid');
            kaart8.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart8.src = 'images/hondje8.jpg';
            kaart8.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart9(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart9.classList.contains('omgedraaid')) {
            kaart9.classList.remove('omgedraaid');
            kaart9.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart9.src = 'images/hondje9.jpg';
            kaart9.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart10(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart10.classList.contains('omgedraaid')) {
            kaart10.classList.remove('omgedraaid');
            kaart10.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart10.src = 'images/hondje10.jpg';
            kaart10.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart11(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart11.classList.contains('omgedraaid')) {
            kaart11.classList.remove('omgedraaid');
            kaart11.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart11.src = 'images/hondje11.jpg';
            kaart11.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}
function omdraaienKaart12(){
    if(statusTimerAan && !controleerClassInLijst()){
        if (kaart12.classList.contains('omgedraaid')) {
            kaart12.classList.remove('omgedraaid');
            kaart12.src = 'images/achterkant-kaart.png'; // Vervang 'achterkant.jpg' met de bron van de achterkant van de kaart
        } else {
            pip.play();
            kaart12.src = 'images/hondje12.jpg';
            kaart12.classList.add('omgedraaid'); //er zit nu een class op het omgedraaide plaatje
            verhoogZetten();
            checkEindeSpel();
        }
    }
}

//AANTAL OMGEDRAAIDE KAARTEN BIJHOUDEN 
let aantalOmgedraaideKaarten = 0; // Houdt het aantal omgedraaide kaarten bij



// Functie om te controleren of alle items in de lijst een bepaalde class hebben bron:chatgpt 
//EINDE SPEL?/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LIJSTJE MET ALLE PLAATJES ERIN

//zie regel 70

//FUNCTIE OM TE CONTROLEREN OF DE ELEMENTEN(i) VAN HET LIJSTJE DE CLASSLIST OMGEDRAAID BEVATTEN

        // Loop door elk item in de lijst. een for loop gebruik je als je weet hoe vaak de loop wordt herhaald. We weten dat het lijstje 12 items lang is dus de loop moet 12 keer herhaald worden.
        //i = 0 > het eerste item in de lijst wordt gecheckt. i<12: er zijn 12 plaatjes beginnend bij 0 dus onder de 12 keer herhalen (12x en niet 13 keer).
        //i++ het volgende element uit het lijstje wordt gecontroleerd.
        // Je begint bij het eerste item. zolang het itemnummer onder de 12 blijft komt er 1 bij dus ga je naar het volgende item. 

function controleerClassInLijst() {
    for (let i = 0; i < alleKaarten.length; i++) { //elk item in de lijst wordt gecontroleerd
        
        // Controleer of het huidige item de opgegeven class heeft
        if (!alleKaarten[i].classList.contains('omgedraaid')) { //!: Dit is een logische operator die de waarde omkeert. In dit geval betekent !classList.contains('omgedraaid') dat de code waar is als het element de class "omgedraaid" niet bevat.    
            return false; // Als één enkel element de class niet heeft, stop en retourneer false
        }
    }
    return true; // Retourneer true als alle elementen de class "omgedraaid" hebben
}
//FUNCTIE CONTROLE UITVOEREN
//Als de lijst wordt uitgevoerd, komt er een true of false uit. als het true is dan krijg je een melding of kan er iets gebeuren.
function checkEindeSpel(){
    if (aantalZetten === 12 && controleerClassInLijst() === true && timerStart <= 5) {
        kidsCheering.play();
        alert('WOW Je hebt alles in een keer binnen 5 seconden omgedraaid');
        clearInterval(timer);
        pauzeerButton.removeEventListener('click', pauzeerHervat);
    } else if (controleerClassInLijst() === true) {
        kidsCheering.play();
        alert('Voltooid');
        clearInterval(timer);
        pauzeerButton.removeEventListener('click', pauzeerHervat); 
    } else { //anders kan je verder met plaatjes aanklikken        
    }
}

//ACHTERGRONDKLEURENVERVANGEN
const body = document.querySelector('body');

function veranderAchtergrondKleur(){
    let getal = Math.floor(Math.random()*6);
    if (getal == 0){
        body.classList.remove('rood', 'oranje', 'geel', 'groen', 'blauw', 'paars');
        document.querySelector('#kleur').textContent = 'Rood';
        body.classList.add('rood');
    } else if (getal == 1){
        body.classList.remove('rood', 'oranje', 'geel', 'groen', 'blauw', 'paars');
        document.querySelector('#kleur').textContent = 'Oranje';
        body.classList.add('oranje');
    } else if (getal == 2){
        body.classList.remove('rood', 'oranje', 'geel', 'groen', 'blauw', 'paars');
        document.querySelector('#kleur').textContent = 'Geel';
        body.classList.add('geel');
    } else if (getal == 3){
        body.classList.remove('rood', 'oranje', 'geel', 'groen', 'blauw', 'paars');
        document.querySelector('#kleur').textContent = 'Groen';
        body.classList.add('groen');
    } else if (getal == 4){
        body.classList.remove('rood', 'oranje', 'geel', 'groen', 'blauw', 'paars');
        document.querySelector('#kleur').textContent = 'Blauw';
        body.classList.add('blauw');
    } else if (getal == 5){
        body.classList.remove('rood', 'oranje', 'geel', 'groen', 'blauw', 'paars');
        document.querySelector('#kleur').textContent = 'Paars';
        body.classList.add('paars');
    }
}
//EVENTLISTENER OP DE SMILEYBUTTON
const smileyButton = document.querySelector('#smiley-button');

smileyButton.addEventListener('click', veranderAchtergrondKleur);

function discobalAan(){
    kaart1.addEventListener('click', veranderAchtergrondKleur);
    kaart2.addEventListener('click', veranderAchtergrondKleur);
    kaart3.addEventListener('click', veranderAchtergrondKleur);
    kaart4.addEventListener('click', veranderAchtergrondKleur);
    kaart5.addEventListener('click', veranderAchtergrondKleur);
    kaart6.addEventListener('click', veranderAchtergrondKleur);
    kaart7.addEventListener('click', veranderAchtergrondKleur);
    kaart8.addEventListener('click', veranderAchtergrondKleur);
    kaart9.addEventListener('click', veranderAchtergrondKleur);
    kaart10.addEventListener('click', veranderAchtergrondKleur);
    kaart11.addEventListener('click', veranderAchtergrondKleur);
    kaart12.addEventListener('click', veranderAchtergrondKleur);
}

function discobalUit(){
    kaart1.removeEventListener('click', veranderAchtergrondKleur);
    kaart2.removeEventListener('click', veranderAchtergrondKleur);
    kaart3.removeEventListener('click', veranderAchtergrondKleur);
    kaart4.removeEventListener('click', veranderAchtergrondKleur);
    kaart5.removeEventListener('click', veranderAchtergrondKleur);
    kaart6.removeEventListener('click', veranderAchtergrondKleur);
    kaart7.removeEventListener('click', veranderAchtergrondKleur);
    kaart8.removeEventListener('click', veranderAchtergrondKleur);
    kaart9.removeEventListener('click', veranderAchtergrondKleur);
    kaart10.removeEventListener('click', veranderAchtergrondKleur);
    kaart11.removeEventListener('click', veranderAchtergrondKleur);
    kaart12.removeEventListener('click', veranderAchtergrondKleur);
}

let discobal = document.getElementById('discobal');

let statusDiscobal = false

function discobalAanUit(){
    if(statusDiscobal === false){
        discobal.src = 'images/discobalaan.jpg';
        discobalAan();
        statusDiscobal = true;
    } else {
        discobal.src = 'images/discobaluit.jpg';
        discobalUit();
        statusDiscobal = false;
    }
}

discobal.addEventListener('click', discobalAanUit);
//einde