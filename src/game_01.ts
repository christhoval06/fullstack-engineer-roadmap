import { generarMatriz } from './solving_test_1';

const BOMBA = '💣'; // Constante que representa una bomba en el tablero

const LARGO_TABLERO = 10; // Tamaño del tablero (10x10)
const CANTIDAD_BOMBAS = 25; // Número de bombas a colocar en el tablero

const TABLERO = generarMatriz(LARGO_TABLERO); // Genera una matriz de tamaño 10x10 utilizando la función generarMatriz

/**
 * Genera un número aleatorio entre min y max (ambos inclusive)
 * @param min - Valor mínimo del rango
 * @param max - Valor máximo del rango
 * @returns Un número entero aleatorio entre min y max
 */
function numeroAleatorio(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Coloca las bombas en el tablero de forma aleatoria
 */
function colocarBombas() {
  for (let bomba = 1; bomba <= CANTIDAD_BOMBAS; bomba++) {
    const fila = numeroAleatorio(0, LARGO_TABLERO - 1);
    const columna = numeroAleatorio(0, LARGO_TABLERO - 1);

    TABLERO[fila][columna] = BOMBA;
  }
}

/**
 * Verifica si la coordenada dada contiene una bomba
 * @param coordenada - Array con dos elementos: fila y columna
 * @returns true si la coordenada contiene una bomba, false en caso contrario
 */
function esUnaBomba(coordenada: number[]) {
  const [fila, columna] = coordenada;
  return TABLERO[fila][columna] === BOMBA;
}

// Coloca las bombas en el tablero antes de iniciar el juego
colocarBombas();

/**
 * Función principal del juego
 * Muestra el tablero en consola y permite al usuario ingresar coordenadas
 * Si el usuario ingresa una coordenada con una bomba, muestra "BOOM!!!" y termina el juego
 * El usuario puede salir del juego escribiendo 'salir'
 */
function Juego() {
  console.table(TABLERO);
  let salir = false;
  while (salir == false) {
    const entrada = prompt(
      'Coloca una coordenada asi: fila,columna o escribe salir'
    );
    if (entrada === 'salir') {
      salir = true;
      break;
    } else {
      const coordenada: Array<number> = (entrada ?? '')
        .split(',')
        .map((coordenada) => Number(coordenada));

      if (esUnaBomba(coordenada)) {
        console.log('BOOM!!!');
        salir = true;
      }
    }
  }
}

export const result = Juego();
