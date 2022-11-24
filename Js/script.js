// Creo la variabile per inserire il nome utente
let nomeUtente = prompt("Inserisci il tuo nome");
console.log(nomeUtente);

// Creo la variabile per inserire il cognome dell'utente
let cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);

// Creo la variabile per inserire il colore preferito
let colorePreferito = prompt("Inserisci il tuo colore preferito");
console.log(colorePreferito);

// Creo la variabile che inserisca automaticamente il numero 21
let numero = 21;
console.log(numero);

// Creo la variabile che contenga la somma delle variabili sopra citate
let password = `${nomeUtente}${cognome}${colorePreferito}${numero}`;
console.log(password);

// Provo la concatenazione con +
// let password = nomeUtente +" "+ cognome +" "+ colorePreferito +" "+ numero;
// console.log(password);

// -------------------------------------------------------
// Creo una funzione che stampi nella pagina la password dell'utente

document.getElementById("nuova-password").innerHTML = "La tua nuova password è:" +" "+ password;
console.log("La tua nuova password è: " + password);
