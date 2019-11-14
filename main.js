// ----------------- general
var consistency = true; //se TRUE mi indica che i dati in input sono "buoni"

// ----------------- recupero user inputs: km da percorrere + età utente
var age = prompt("Inserisci la tua età:", "18");
var km = prompt("Inserisci i km da percorrere:", "100");
var sconto = 1.0; // 1=100% cioè nessuno sconto

// ----------------- controlli di consistenza sullo user inputs
if (age < 1 || age > 150) {
    alert("ATTENZIONE: l'età non è corretta, il sistema non può fornire informazioni. Riprova.");
    consistency = false;
}

if (km < 1) {
    alert("ATTENZIONE: i km da percorrere non sono corretti, il sistema non può fornire informazioni. Riprova.");
    consistency = false;
}


// nascondo il panello con le informazioni di acquisto se non ho dati consistenti
if (!consistency) {
    document.getElementById("buy-panel").setAttribute("class", "hide-buy-panel");
}

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