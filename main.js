// ----------------- general
var dataIsValid = true; //se TRUE mi indica che i dati in input sono "buoni"

// ----------------- recupero user inputs: km da percorrere + età utente
var age = parseInt(prompt("Inserisci la tua età (min.1-max.120):", "18"));
var km = parseInt(prompt("Inserisci i km da percorrere (1-10000):", "100"));
var sconto = 1; // 1=100% cioè nessuno sconto

// ----------------- controlli di consistenza sullo user inputs
if (isNaN(age) || age < 1 || age > 120) {
    // l'input non è un numero o è fuori range
    alert("ATTENZIONE: l'età deve essere un numero intero tra 1 e 120, il sistema non può fornire informazioni. Riprova.");
    dataIsValid = false;
}

if (isNaN(km) || km < 1 || km > 10000) {
    // l'input non è un numero o è fuori range
    alert("ATTENZIONE: i km devono essere un numero intero tra 1 e 10000, il sistema non può fornire informazioni. Riprova.");
    dataIsValid = false;
}


if (dataIsValid) {
    // controlli di consistenza superati, posso elaborare
    // ----------------- verifica se devo applicare sconti
    if (age < 18) {
        // 20% di sconto per gli under 18
        sconto = 0.8;
    } else if (age > 65) {
        // 40% di sconto per gli over 65
        sconto = 0.6;
    }
    // ----------------- calcolo prezzo in base al kilometrggio e scontistica
    // la funzione toFixed(2) mi arrotonda il valore al secondo decimale
    // in modo da avere un valore con al massimo 2 cifre decimali (mitico Luca!)
    var price = (km * 0.21 * sconto).toFixed(2);

    // ----------------- popolo gli elementi HTML
    document.getElementById("km").innerHTML = km;
    document.getElementById("age").innerHTML = age;

    // se non c'e sconto visualizzo la stringa "nessuno" altrimenti visualizzo lo sconto (un numerico)
    if (sconto == 1) {
        // nessuno sconto da applicare per il cliente
        document.getElementById("x100").innerHTML = ""; // elimino il simbolo "%"
        document.getElementById("discount").innerHTML = "nessuno";
    } else {
        // c'è uno sconto da applicare
        // uso Math.round() per evitare di visualizzare 19.999999.. anzichè 20
        document.getElementById("discount").innerHTML = Math.round((1 - sconto) * 100);
    }

    document.getElementById("price").innerHTML = price;

} else {
    // ----------------- dati inconsistenti
    // non eseguo nessun calcolo poichè non ho dati validi
    // nascondo pannello informazioni di acquisto
    document.getElementById("buy-panel").setAttribute("class", "hide-buy-panel");
}