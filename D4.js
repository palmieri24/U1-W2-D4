/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  let a = l1 * l2;
  return a;
}
const resultArea = area(13, 8);
console.log("L'area del triangolo è : " + resultArea);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(intero1, intero2) {
  if (intero1 !== intero2) {
    let sum = intero1 + intero2;
    return sum;
  } else {
    let multiplication = (intero1 + intero2) * 3;
    return multiplication;
  }
}
const resultSum = crazySum(7, 7);
console.log(resultSum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
  let differenzaAss = Math.abs(numero - 19);

  if (numero > 19) {
    return differenzaAss * 3;
  } else {
    return differenzaAss;
  }
}

let risultato1 = crazyDiff(10);
console.log(risultato1);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  return (n >= 20 && n <= 100) || n === 400;
}
let risultato2 = boundary(78);
console.log(risultato2);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE" + str;
  }
}
let risultato4 = epify("è un bel corso");
console.log(risultato4);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(np) {
  return np % 7 === 0 || np % 3 === 0;
}
let risultato3 = check3and7(9);
console.log(risultato3);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
  return stringa.split("").reverse().join("");
}
let risultato = reverseString("LOVE");
console.log(risultato);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {}
let upperLetters = upperFirst("le prime lettere sono maiuscole");
console.log(upperLetters);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(strings) {
  return strings.slice(1, -1);
}
let risultato5 = cutString("Amore");
console.log(risultato5);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const numeriCasuali = [];

  for (let i = 0; i < n; i++) {
    const numeroCasuale = Math.floor(Math.random() * 11);
    numeriCasuali.push(numeroCasuale);
  }
  return numeriCasuali;
}
const numeriCasuali = giveMeRandom(5);
console.log(numeriCasuali);
