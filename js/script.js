let userName = prompt(`inserisci il tuo nome: `);
console.log(userName);
let userSurname = prompt(`inserisci il tuo cognome: `);
console.log(userSurname);
let userColor = prompt(`inserisci il tuo colore: `);
console.log(userColor);
let generatedPwd = userName + userSurname + userColor + 24;
// ho inserito il 24 come un semplice numero perche in questo caso trattandosi di una varibile stringa non occore forzatamente trasformare i numeri in stringhe
console.log(generatedPwd);

const mainTitle = document.createElement('h1');
let text = document.createTextNode(`la password generata per te è: ${generatedPwd}`);
mainTitle.appendChild(text);
document.body.appendChild(mainTitle);



// in alternativa potevo avere già un h1 nella mia pagina index.html ripescarlo con la funzione getElementById e poi modificarne il contenuto

// const container = document.getElementById('titolo');
// container.innerHTML = generatedPwd;

