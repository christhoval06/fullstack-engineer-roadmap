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
    for (let columna = 0; columna < largo; columna++) {
      figura[fila][columna] = '';
    }
  }

  return figura;
}

/**
 * Genera una matriz cuadrada de cadenas vacías.
 *
 * @param largo - La longitud de cada lado de la matriz cuadrada.
 * @returns Una matriz cuadrada de cadenas vacías de tamaño `n` x `n`.
 *
 * @example
 * ```typescript
 * const matriz = generarMatriz(3);
 * // matriz = [
 * //   ['', '', ''],
 * //   ['', '', ''],
 * //   ['', '', '']
 * // ]
 * ```
 *
 * @throws {RangeError} Si el valor de `largo` es negativo.
 */
export function generarMatriz(largo: number): string[][] {
  if (largo < 0) {
    throw new RangeError('El valor de largo no puede ser negativo.');
  }
  return Array.from({ length: largo }, () => Array(largo).fill(''));
}

/**
 * Convierte una matriz de cadenas en una representación de cadena con filas separadas por nuevas líneas.
 *
 * @param matriz - La matriz de cadenas a convertir.
 * @returns Una cadena donde cada fila de la matriz está separada por espacios y cada fila está en una nueva línea.
 *
 * @example
 * ```typescript
 * const matriz = [
 *   ['a', 'b', 'c'],
 *   ['d', 'e', 'f'],
 *   ['g', 'h', 'i']
 * ];
 * const resultado = imprimirMatriz(matriz);
 * // resultado = 'a b c\nd e f\ng h i'
 * ```
 */
export function imprimirMatriz(matriz: string[][]): string {
  return matriz.map((row) => row.join(' ')).join('\n');
}

/**
 * Dibuja un cuadrado en una matriz de cadenas, utilizando caracteres específicos para los bordes y el relleno.
 *
 * @param figura - La matriz de cadenas en la que se dibujará el cuadrado.
 * @param inicio - La fila y columna inicial donde comienza el cuadrado.
 * @param final - La fila y columna final donde termina el cuadrado.
 * @param bordes - (Opcional) El carácter para los bordes del cuadrado. Por defecto es '*'.
 * @param relleno - (Opcional) El carácter para el relleno del cuadrado. Por defecto es ' ' (espacio).
 * @returns La representación de cadena de la matriz con el cuadrado dibujado.
 *
 * @example
 * ```typescript
 * const matriz = [
 *   [' ', ' ', ' ', ' ', ' '],
 *   [' ', ' ', ' ', ' ', ' '],
 *   [' ', ' ', ' ', ' ', ' '],
 *   [' ', ' ', ' ', ' ', ' '],
 *   [' ', ' ', ' ', ' ', ' ']
 * ];
 * const resultado = generarCuadrado(matriz, 1, 3, '#', '.');
 * // resultado =
 * // '     \n' +
 * // ' ### \n' +
 * // ' #.# \n' +
 * // ' ### \n' +
 * // '     '
 * ```
 *
 * @throws {RangeError} Si `inicio` o `final` están fuera de los límites de la matriz.
 */
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

/**
 * Genera una matriz cuadrada con múltiples cuadrados concéntricos dibujados en ella.
 *
 * @param largo - (Opcional) La longitud de cada lado de la matriz cuadrada. Por defecto es 4.
 * @param bordes - (Opcional) El carácter para los bordes de los cuadrados. Por defecto es '*'.
 * @param relleno - (Opcional) El carácter para el relleno de los cuadrados. Por defecto es ' ' (espacio).
 * @returns Una cadena que representa la matriz con los cuadrados concéntricos dibujados.
 *
 * @example
 * ```typescript
 * const resultado = generarCuadrados(5, '#', '.');
 * // resultado =
 * // '#####\n' +
 * // '#...#\n' +
 * // '#.#.#\n' +
 * // '#...#\n' +
 * // '#####'
 * ```
 *
 * @throws {RangeError} Si el valor de `largo` es negativo.
 */
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
  test9: generarCuadrados(45, '▓▓', '░░'),
};
