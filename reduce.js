const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas) {
  // const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
  //   return acumulador + nota;
  // }, 0);

  const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

  const media = somaDasNotas / listaDeNotas.length;
  return media;
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));

