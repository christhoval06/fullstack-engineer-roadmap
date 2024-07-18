/**
 * Eliminar espacios en blanco de una oracion
 */
function borrarEspacios(str: string): string {
  if (str.length == 0) {
    return '';
  }

  let _str: string = '';

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] != ' ') {
      _str += str[i];
    }
  }

  return _str;
}

/**
 * hacer un programa que haga invierta una palabra
 *
 * HOLA -> ALOH
 */

function invertirPalabra(str: string): string {
  if (str.length == 0) {
    return '';
  }

  str = borrarEspacios(str);

  let strInvertida: string = '';

  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  return strInvertida;
}

/**
 * Validar si una palabra es un palíndromo
 *
 */

function esPalindromo(str: string): boolean {
  const strInvertida = invertirPalabra(str);

  return borrarEspacios(str) == strInvertida;
}

/**
 * Imprimir un cuadrado usando *, nuestra funcion debe recir el lado de los lados; por defecto el largo es de 4
 *
 * largo 4
 * ****
 * *  *
 * *  *
 * ****
 */

function imprimirCuadrado(largo: number = 4): string {
  const character: string = '*';
  let figura: string = '';

  for (let fila = 1; fila <= largo; fila++) {
    for (let columna = 1; columna <= largo; columna++) {
      if (fila == 1 || fila == largo || columna == 1 || columna == largo) {
        figura += character;
      } else {
        figura += ' ';
      }
    }
    figura += '\n';
  }

  return figura;
}

export const result = {
  '00': borrarEspacios('dabale arroz a la zorra el abad'),
  a: invertirPalabra('HOLA'),
  b: `anilina ${esPalindromo('anilina')}`,
  c: `ana ${esPalindromo('ana')}`,
  d: `dabale arroz a la zorra el abad ${esPalindromo(
    'dabale arroz a la zorra el abad'
  )}`,
  e: imprimirCuadrado(),
  f: imprimirCuadrado(10),
  g: imprimirCuadrado(2),
  h: imprimirCuadrado(3),
  i: imprimirCuadrado(15),
};
