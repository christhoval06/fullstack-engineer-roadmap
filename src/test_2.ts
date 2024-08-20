import { performanceChecker } from './performance';
/**
 * 
 ## Tema 2: Algoritmos y `Math`

## Problema 1: Teorema de Pitágoras
Se require que como ingeniero jr; escribas una función que calcule el teorema de Pitágoras.
Sabiendo que el teorema de Pitágoras es una relación en geometría euclidiana entre los tres lados de un triángulo rectángulo. Afirma que el área del cuadrado cuyo lado es la hipotenusa (el lado opuesto al ángulo recto) es igual a la suma de las áreas de los cuadrados cuyos lados son los catetos (los otros dos lados que no son la hipotenusa).

- $$a^{2} + b^{2} = c^{2}$$

- $$c = \sqrt{a^{2} + b^{2}}$$

### Requerimientos:
- se requere validar que los valores dados sean números

### Data de pruebas
```ts
console.log(teorema_pitagoras(2, 4));
console.log(teorema_pitagoras(3, 4));
// Salida :
4.47213595499958
5
```
 */

/**
 * Calcula la hipotenusa de un triángulo rectángulo utilizando el teorema de Pitágoras.
 *
 * El teorema de Pitágoras establece que en un triángulo rectángulo, el cuadrado de la hipotenusa
 * (el lado opuesto al ángulo recto) es igual a la suma de los cuadrados de los otros dos lados.
 *
 * @param {number} a - La longitud de uno de los lados del triángulo rectángulo.
 * @param {number} b - La longitud del otro lado del triángulo rectángulo.
 * @returns {number | undefined} La longitud de la hipotenusa si las entradas son números válidos, de lo contrario `undefined`.
 *
 * @example
 * // Retorna 5
 * teorema_pitagoras(3, 4);
 *
 * @example
 * // Retorna undefined (entrada no válida)
 * teorema_pitagoras(3, '4');
 */
function teorema_pitagoras(a: number, b: number): number | undefined {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return undefined;
  }

  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

console.log(teorema_pitagoras(2, 4));
console.log(teorema_pitagoras(3, 4));
console.log(teorema_pitagoras(-3, 4));

/**
 ## Problema 2: Suma de un lista de números
Se require que como ingeniero jr; escribas una función que sume una lista de valores dados por el usuario

### Requerimientos:
- se requere validar que los valores dados sean números
- si el valor no es un número nos lo saltamos.

### Data de pruebas
```ts
console.log(suma([1,2,3]));
console.log(suma([100,-200,3]));
console.log(suma([1,2,'a',3]));
Salida :
6
-97
6
```
 */

/**
 * Suma todos los elementos de una lista de números.
 *
 * La función toma una lista de números, convierte cada elemento a número en caso de no serlo,
 * y suma todos los valores. Si algún elemento no puede convertirse a un número válido, se considera como 0.
 *
 * @param {number[]} lista - Un array de números a sumar.
 * @returns {number} La suma de todos los elementos de la lista.
 *
 * @example
 * // Retorna 10
 * suma([1, 2, 3, 4]);
 *
 * @example
 * // Retorna 6 (elemento '4a' se convierte a 0)
 * suma([1, 2, 3, '4a']);
 */
function suma(lista: number[]): number {
  return lista.reduce((acumalador, elemento) => {
    elemento = isNaN(Number(elemento)) ? 0 : Number(elemento);
    return acumalador + elemento;
  }, 0);
}

const randomNumberStrings = Array.from({ length: 5 }, () =>
  (Math.floor(Math.random() * 100) + 1).toString()
);

const sumaPerformanceChecker = performanceChecker(suma);
console.log(randomNumberStrings);
console.log(sumaPerformanceChecker(randomNumberStrings));
console.log(suma([1, 2, 3]));
console.log(suma([100, -200, 3]));
console.log(suma([1, 2, 'a', 3]));

export const result = {};
