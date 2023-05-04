//Union

type Conversion = 'as-number' | 'as-text';

function combinar(
  input1: number | string,
  input2: number | string,
  resultConversion: Conversion
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

let Idades = combinar(30, 26, 'as-number');
console.log(Idades);

let IdadesStr = combinar('30', '26', 'as-number');
console.log(IdadesStr);

let Palavras = combinar('Mary', 'Max', 'as-text');
console.log(Palavras);
