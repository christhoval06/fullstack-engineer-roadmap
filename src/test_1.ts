/*
Tema 1: Estructuras de datos y Algoritmos

Problema: Generación de cuadrados Concéntricos
Eres un ingeniero de softaware Jr y se te pide que escribas una función en TypeScript que genere un cuadrado con un número n cuadrados concéntricos formados por un border dado y los espacios deben estar rellenos por otro caracater dado.

Requerimientos:
- La figura debe tener un tamaño n (donde n es un número mayor a 0).
- La figura debe contener cuadrados concéntricos formados por un caracter dado por el usuario ejemplo *.
- Cada cuadrado concéntrico debe estar separado por una línea de un carácter dado por el usuario de los otros cuadrados.
*/

// import { imprimirCuadrado } from './programming1';

function generarMatrizOld(largo: number): string[][] {
  const figura: string[][] = [];

  for (let fila = 0; fila < largo; fila++) {
    figura[fila] = [];
    for (let columna = 1; columna <= largo; columna++) {
      figura[fila][columna] = '';
    }
  }

  return figura;
}

function generarMatriz(largo: number): string[][] {
  return Array.from({ length: largo }, () => Array(largo).fill(' '));
}

function imprimirMatriz(matriz: string[][]): string {
  return matriz.map((row) => row.join(' ')).join('\n');
}

function generarCuadrado(
  figura: string[][],
  inicio: number,
  final: number,
  bordes: string = '*',
  relleno: string = ' '
): string {
  for (let fila = inicio; fila <= final; fila++) {
    for (let columna = inicio; columna <= final; columna++) {
      const esUnBorde =
        fila == inicio ||
        fila == final ||
        columna == inicio ||
        columna == final;
      figura[fila][columna] = esUnBorde ? bordes : relleno;
    }
  }

  return imprimirMatriz(figura);
}

function generarCuadradoAI(
  figura: string[][],
  inicio: number,
  final: number,
  bordes: string = '*',
  relleno: string = ' '
): string {
  figura.forEach((fila, filaIdx) => {
    fila.forEach((_, colIdx) => {
      const esUnBorde =
        filaIdx >= inicio &&
        filaIdx <= final &&
        colIdx >= inicio &&
        colIdx <= final &&
        (colIdx == inicio ||
          colIdx == final ||
          filaIdx == inicio ||
          filaIdx == final) &&
        !Boolean(figura[filaIdx][colIdx]);

      figura[filaIdx][colIdx] = esUnBorde ? bordes : relleno;
    });
  });

  return imprimirMatriz(figura);
}

function generarCuadrados(
  largo: number = 4,
  bordes: string = '*',
  relleno: string = ' '
): string {
  const figura = generarMatriz(largo);

  for (let cuadro = 0; cuadro <= Math.floor(largo / 2); cuadro += 2) {
    generarCuadrado(figura, cuadro, largo - 1 - cuadro, bordes, relleno);
  }

  return imprimirMatriz(figura);
}

export const result = {
  test1: generarCuadrados(1),
  test2: generarCuadrados(4, '8', ' '),
  test3: generarMatriz(4),
  test4: imprimirMatriz(generarMatriz(8)),
  test5: generarCuadrados(6, '*', ' '),
  test6: generarCuadrados(10, '*', ' '),
  test7: generarCuadrados(25, '▓▓', '░░'),
  test8: generarCuadrados(50, '▓▓', '░░'),
};
