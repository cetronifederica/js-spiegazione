const baseInput = 10; 
const altezzaInput = 20; 
const area = calcolaAreaRettangolo(baseInput, altezzaInput);
console.log('Calcolo Area');
console.log(area);
const perimetro = calcolaPerimetro (baseInput, altezzaInput);
console.log('Calcolo Perimetro');
console.log(perimetro);
//dichiaro la funzione dopo il punto in cui viene eseguita FUNZIONA LO STESSO
// questo perchè è una funziona nominale, HOISTED
function calcolaAreaRettangolo(base, altezza) {
    return base*altezza;
}

function calcolaPerimetro (base, altezza) {
    return 2*base + 2* altezza;
}