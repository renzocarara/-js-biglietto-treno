// ----------------- general
var consistency = true; //se TRUE mi indica che i dati in input sono "buoni"

// ----------------- recupero user inputs: km da percorrere + età utente
var age = parseInt(prompt("Inserisci la tua età:", "18"));
console.log("age: ", age);
var km = parseInt(prompt("Inserisci i km da percorrere:", "100"));
var sconto = 1.0; // 1=100% cioè nessuno sconto

// ----------------- controlli di consistenza sullo user inputs
if (isNaN(age)) {
    // l'input non è un numero
    alert("ATTENZIONE: l'età deve essere un numero intero, il sistema non può fornire informazioni. Riprova.");
    consistency = false;
} else if (age < 1 || age > 150) {
    // l'input è un numero ma non è in un range corretto
    alert("ATTENZIONE: il valore dell'età non è corretto, il sistema non può fornire informazioni. Riprova.");
    consistency = false;
}

if (isNaN(km)) {
    // l'input non è un numero
    alert("ATTENZIONE: i km devono essere un numero intero, il sistema non può fornire informazioni. Riprova.");
    consistency = false;
} else if (km < 1) {
    // l'input è un numero ma è negativo
    alert("ATTENZIONE: i km da percorrere non possono essere negativi, il sistema non può fornire informazioni. Riprova.");
    consistency = false;
}


// nascondo il panello con le informazioni di acquisto se non ho dati consistenti
if (!consistency) {
    // non eseguo nessun calcolo poichè non ho dati consistenti
    // nascondo pannello informazioni di acquisto e propongo all'utente
    // di ripartire (bottone "Ricalcola")
    document.getElementById("buy-panel").setAttribute("class", "hide-buy-panel");
} else {
    // controlli di consistenza superati, posso elaborare

    // ----------------- verifica applicazione scontistica
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
        document.getElementById("discount").innerHTML = "";
        document.getElementById("discount").innerHTML = "nessuno";
    } else {
        // c'è uno sconto da applicare
        // uso Math.round() per evitare di visualizzare 19.999999.. anzichè 20
        document.getElementById("discount").innerHTML = Math.round((1 - sconto) * 100) + "%";
    }

    document.getElementById("price").innerHTML = price;
}