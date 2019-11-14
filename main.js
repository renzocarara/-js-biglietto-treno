// rcupero user inputs: lm da percorrere + età utente
var age = prompt("Inserisci la tua età:", "18");
var km = prompt("Inserisci i km da percorrere:", "100");
var sconto = 1.0; // 1=100% cioè nessuno sconto

// realzzare eventuali controlli di consistenza sullo user inputs

// verifica applicazione scontistica
if (age < 18) {
    // 20% di sconto per gli under 18
    sconto = 0.8;
} else if (age > 65) {
    // 40% di sconto per gli over 65
    sconto = 0.6;
}
// calcolo prezzo in base al kilometrggio e scontistica
var price = km * 0.21 * sconto;

console.log("prezzo: ", price);

// popolo gli elementi HTML con inputs ed elaborati
document.getElementById("km").innerHTML = km;
document.getElementById("age").innerHTML = age;

// se non c'e conto visualizzo stringa "nessuno" altrimenti visualizzo lo sconto (un numerico)
if (sconto == 1) {
    // nessuno sconto da applicare per il cliente
    console.log("nessuno sconto");
    document.getElementById("discount").innerHTML = "nessuno";
} else {
    // c'è uno sconto da applicare
    console.log("sconto=", sconto, "  ---   (1 - sconto)=", (1 - sconto));
    console.log("sconto", Math.round((1 - sconto) * 100));
    // uso Math.round() per evitare di visualizzare 19.99999 anzichè 20
    document.getElementById("discount").innerHTML = Math.round((1 - sconto) * 100);
}

document.getElementById("price").innerHTML = price;