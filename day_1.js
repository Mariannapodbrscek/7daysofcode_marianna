let numeroUn = 1;
let stringUn = '1';

let numeroTreinta = 30;
let stringTreinta = '30';

let numeroDiez = 10;
let stringDiez = '10';

// Comparación entre numeroUn y stringUn
if (numeroUn === stringUn) {  // Usando === para verificar valor y tipo idénticos
  console.log('Las variables numeroUn y stringUn son idénticas, tienen el mismo valor y el mismo tipo');
} else if (numeroUn == stringUn) {  // Usando == para comparar solo los valores
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

// Comparación entre numeroTreinta y stringTreinta
if (numeroTreinta === stringTreinta) {  // Usando === para comparar valor y tipo
  console.log('Las variables numeroTreinta y stringTreinta son idénticas, tienen el mismo valor y el mismo tipo');
} else if (numeroTreinta == stringTreinta) {  // Usando == para comparar solo los valores
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo valor');
}

// Comparación entre numeroDiez y stringDiez
if (numeroDiez === stringDiez) {  // Usando === para comparar valor y tipo
  console.log('Las variables numeroDiez y stringDiez son idénticas, tienen el mismo valor y el mismo tipo');
} else if (numeroDiez == stringDiez) {  // Usando == para comparar solo los valores
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}