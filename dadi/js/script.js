// Dichiaro una costante per il button
const button = document.querySelector('#btn');

button.addEventListener('click', function(){

    // Chiedo all'utente un numero tra 1 e 6
    let numero_utente = prompt('Inserisci un numero tra 1 e 6');
    console.log('numero utente: ' + numero_utente);

    // Genero un numero casuale
    let numeroPc = Math.floor(Math.random() * 6) + 1;
    console.log('numero pc: ' + numeroPc);

    // Se il numero dell'utente è maggiore del numero del pc
    if(numeroUtente > numeroPc){
        // Ha vinto l'utente
        console.log('Hai vinto!');
        document.getElementById('subtitle').innerText = 'YOU WIN';
    } else if(numeroUtente == numeroPc){
        // Pareggio
        console.log('Pareggio');
        document.getElementById('subtitle').innerText = 'NULL';
    } else{
        // Ha vinto il pc
        console.log('Hai perso!');
        document.getElementById('subtitle').innerText = 'YOU LOSE';
    }

    
})