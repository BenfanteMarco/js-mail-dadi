
// Chiedere la email all'utente
let emailUtente = prompt('Inserisci la tua email');
console.log('Email utente: ' + emailUtente);

// Dichiaro costante che contiene email valide
const listaEmail = ['marco@gmail.com', 'giovanni@gmail.com', 'giuseppe@gmail.com'];
console.log('array email');
console.log(listaEmail);

// Dichiaro variabile per ricordarmi se ho trovato la email dell'utente
let trovataEmail = false;

for(let i=0; (i<listaEmail.length) && (trovataEmail==false); i++){

    // Recupero l'email corrente di ogni iterazione
    let emailCorrente = listaEmail[i];
    console.log('iterazione ' + i + ': ' + emailCorrente);

    // Verifico che l'email inserita è presente nell'array
    if(emailUtente == emailCorrente){
        // Email trovata
        trovataEmail = true;
        console.log('trovata email');
    } else{
        // Email non trovata
        console.log('email non trovata');
    }
}

// Dopo aver verificato comunico all'utente se la sua email è presente o no
if(trovataEmail == true) {
    console.log('Puoi accedere');
} else {
    console.log('Non puoi accedere');
}