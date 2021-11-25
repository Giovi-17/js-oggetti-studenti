/* [1] Creare un oggetto che descriva uno studente, 
con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in 
tutte le proprietà dell'oggetto.
[2] Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, 
nome e cognome.
[3] Dare la possibilità all’utente, 
attraverso 3 prompt(), 
di aggiungere un nuovo oggetto studente 
inserendo nell’ordine: nome, cognome e età. */


//[1]
let studente = {

    nome: "Gianpietro" ,

    cognome: "Angioi",

    eta: 21

}

for(let key in studente){
    
    alert(key + ": " + studente[key]);
}

//[2]
let studenti = [

    {
        nome: "Zeferino  " ,

        cognome: "Scasso",
    
        eta: 24
    },

    {
        nome: "Arnaldina " ,

        cognome: "Mengaldo",
    
        eta: 27
    },

    {
        nome: "Leardino  " ,

        cognome: "Vitulano",
    
        eta: 28
    }

];

for(let key in studenti){
    let num = parseInt(key) + 1;

    alert("Studente: " + [num]);
    alert("Nome: " + studenti[key].nome);
    alert("Cognome: " + studenti[key].cognome);

}