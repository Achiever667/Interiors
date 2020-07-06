let basic = document.getElementById('basic');
let card = document.getElementById('card');
basic.addEventListener('click', function basicCard(){
    basic.checked == false ? card.disabled = true : card.disabled = false;
    if(basic.checked == true && medium.checked == false  && classic.checked == false){
        card.style.background = "blue";
        card.style.borderRadius = '1em';
        card.style.padding = 'none';
        document.getElementById('bttn').innerHTML = 'Learn More';
        document.getElementById('bttn').style.border = '2em';
        document.getElementById('bttn').style.background = 'peru';
        medium.disabled = true;
        classic.disabled = true;
 } 
    else {
        card.style.borderRadius= '1em';
        card.style.padding = 'none';
        card.style.background = "White";
        document.getElementById('bttn').innerHTML = '';
        document.getElementById('bttn').style.background = 'none';
        medium.disabled = false;
        classic.disabled = false;
       
    }
});

let medium = document.getElementById('medium');
let cardF = document.getElementById('cardF');
medium.addEventListener('click', function mediumCardF(){
    medium.checked == false? cardF.disabled = true :cardF.disabled = false;
    if(medium.checked == true && basic.checked == false && classic.checked == false){
        cardF.style.background = "blue";
        cardF.style.borderRadius = '1em';
        document.getElementById('btnF').innerHTML = 'Learn More';
        document.getElementById('btnF').style.border = '1em';
        document.getElementById('btnF').style.background = 'peru';
        basic.disabled = true;
        classic.disabled = true;
       
 } 
    else { 
       

        cardF.style.borderRadius= '1em';
        cardF.style.padding = 'none';
        cardF.style.background = "White";
        document.getElementById('btnF').innerHTML = '';
        document.getElementById('btnF').style.background = 'none';
        basic.disabled = false;
        classic.disabled = false;

    }
});


let classic = document.getElementById('classic');
let cardD = document.getElementById('cardD');
classic.addEventListener('click', function classicCardD(){
    classic.checked == false ? cardD.disabled = true : cardD.disabled = false;
    if(classic.checked == true && medium.checked == false && basic.checked == false){
        cardD.style.background = "blue";
        cardD.style.borderRadius = '1em';
        document.getElementById('btnD').innerHTML = 'Learn More';
        document.getElementById('btnD').style.border = '1em';
        document.getElementById('btnD').style.background = 'peru';
        medium.disabled = true;
        basic.disabled = true;
    }
    else {
        cardD.style.borderRadius= '1em';
        cardD.style.padding = 'none';
        cardD.style.background = "White";
        document.getElementById('btnD').innerHTML = '';
        document.getElementById('btnD').style.background = 'none';
        medium.disabled = false;
        basic.disabled = false;   
     }
})
// var toggleSignUp = document.getElementById('toggleSignUp');
//  var toggleButton = document.getElementById("toggleButton");
//  toggleButton.addEventListener('click', function myFunction(){
//  if (toggleSignUp == this.click){
//     toggleButton.display = 'none';
//  }
//  }
 function myFunction() {
    // toggleButton.display = 'none';
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
    element.display = 'block';
 }