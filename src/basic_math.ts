/**
 * Usted es un ingeniero de Software Jr. y se le pide que implemente un algoritmo con el cual
 * la computadora adivine un numero N  pensado por el usuario y debe contabilizar el numero de intentos y los numeros que se han elegido.
 *
 * el usuario debera proporcionar un `>` si el el numero es mayor, un `<` si el numero es menor
 * y `=` si es el numero pensado.
 *
 */

import { numeroAleatorio } from './utilidades/aleatorio';

// Constantes para los límites del rango de números
const NUMEROS_BORDES = [1, 50];

// Enum para las diferentes operaciones posibles
enum Operacion {
  Mayor = '>',
  Menor = '<',
  Igual = '=',
  Salir = 's',
}

/**
 * Función que ajusta el rango basado en la respuesta del usuario
 * @param operacion - La operación ingresada por el usuario ('>', '<', '=')
 * @param numero - El número adivinado por la computadora
 * @param minimo - El límite inferior del rango
 * @param maximo - El límite superior del rango
 * @returns Una tupla con tres valores: si el número fue adivinado, el nuevo mínimo y el nuevo máximo
 */
function logica(
  operacion: string,
  numero: number,
  minimo: number,
  maximo: number
): [boolean, number, number] {
  switch (operacion) {
    case Operacion.Mayor:
      return [false, numero, maximo];
    case Operacion.Menor:
      return [false, minimo, numero];
    case Operacion.Igual:
      return [true, 0, 0];
  }
  return [false, 0, 0];
}

/**
 * Función principal del juego
 * La computadora intenta adivinar el número pensado por el usuario
 */
function Juego() {
  let salir = false; // Variable para controlar la salida del bucle
  const memoria: number[] = []; // Array para almacenar los números intentados

  let [minimo, maximo] = NUMEROS_BORDES; // Inicialización de los límites

  // Solicitar al usuario que piense en un número dentro del rango
  alert(
    `Piensa un número entre [${minimo} - ${maximo}] primero\ny luego continúa.`
  );

  while (salir == false) {
    const numero = numeroAleatorio(minimo, maximo); // Generar un número aleatorio dentro del rango
    memoria.push(numero); // Almacenar el número intentado

    // Crear mensaje de salida para el prompt
    const salida = [
      `¿Es tu número ${numero}?\n`,
      '• [<] es menor',
      '• [>] es mayor',
      '• [=] es mi número',
      '• [s] Salir',
      '\nEscribe una opción.',
    ].join('\n');

    const entrada = prompt(salida) ?? ''; // Obtener la respuesta del usuario

    const esUnaOperacionValida = ['<', '>', '=', 's'].includes(entrada); // Validar la respuesta

    if (esUnaOperacionValida) {
      if (entrada === Operacion.Salir) {
        break;
      }

      const [adivinado, min, max] = logica(entrada, numero, minimo, maximo); // Ajustar el rango
      minimo = min;
      maximo = max;

      salir = adivinado; // Verificar si el número fue adivinado
    }
  }

  // Mostrar el número de intentos y un mensaje de agradecimiento
  const salida = [`Intentos: ${memoria.length}`, 'Gracias por jugar.'].join(
    '\n'
  );

  alert(salida);
}

function Juego00() {
  const memoria: number[] = [];
  let [minimo, maximo] = NUMEROS_BORDES;
  let adivinado = false;

  alert(`Piensa un número entre ${minimo} y ${maximo}.`);

  while (!adivinado) {
    const numero = numeroAleatorio(minimo, maximo);
    memoria.push(numero);

    const entrada =
      prompt(
        `¿Es tu número ${numero}?\n• [<] es menor\n• [>] es mayor\n• [=] es mi número\n• [s] Salir\nEscribe una opción.`
      ) ?? '';

    if (entrada === Operacion.Salir) {
      break;
    }

    const [esAdivinado, nuevoMinimo, nuevoMaximo] = logica(
      entrada,
      numero,
      minimo,
      maximo
    );

    adivinado = esAdivinado;
    minimo = nuevoMinimo;
    maximo = nuevoMaximo;
  }

  alert(`Intentos: ${memoria.length}\nGracias por jugar.`);
}

// export const result = Juego();
