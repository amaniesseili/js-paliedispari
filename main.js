// ------ --Pari e Dispari-------
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. -----------------------> sceltaUtente.value inserita in un 2 input html
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).----> numeroRnadom=math...
//Sommiamo i due numeri -----------------------------------------------------------------> somma=scltaUtente + numroRandom
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)-----------> risoltato=(somma % 2 === 0)
//Dichiariamo chi ha vinto.--------------------------------------------------------------> if pari/dispari + messaggio

const btnGioca = document.querySelector(".btn-gioca");

btnGioca.addEventListener( "click", function gioco(){
    const numeroUtente = parseInt( document.getElementById(input-numero-utente).value) ; //numero utente 
    const sceltaUtente= document.querySelector("input[name=scelta-utente]").value ;      //pari o dispari
    
    const numeroComputer = Math.floor(Math.random() * 5) + 1 ; // numero random per il computer
    document.getElementById("uinput-numero-computer").innerHTML =  numeroComputer;

    const somma = numeroUtente + numeroComputer; // la somma dei due numeri

    let risultato = ( somma % 2 === 0 )   // per sapere se il risultato e pari o dispari 


    if ( risultato === sceltaUtente) {
        document.getElementById("messaggio").innerHTML =( "Complimeti, Hai vinto !!")
    } else {
        document.getElementById("messaggio").innerHTML =( "Ci dispiace, Hi perso!!")

    }

}
)  