/*
# Test #3 Programación Orientada a Objetos: Piedra, Papel o Tijera

## Instrucciones:
1. Crea las clases necesarias para modelar el juego "Piedra, Papel o Tijera".
    - Define una clase `Juego` para manejar la lógica principal.
    - Define una clase `Jugador` que representará a un jugador.
    - Define una clase `Movimiento` para representar cada jugada: piedra, papel o tijera.

2. **Requisitos específicos:**
    - **Clase `Juego`:**
        - Debe tener un método `jugar_ronda(Jugador jugador1, Jugador jugador2)` que reciba dos jugadores y resuelva quién gana.
        - Debe contar con un sistema para llevar el marcador de cuántas veces ha ganado cada jugador.
        - Opción extra: Permitir jugar múltiples rondas y declarar un ganador final.

    - **Clase `Jugador`:**
        - Debe tener un nombre y la capacidad de hacer una jugada (piedra, papel o tijera).
        - Debe tener un método `hacer_movimiento()` que permita hacer una jugada al azar o basada en alguna estrategia.

    - **Clase `Movimiento`:**
        - Debe modelar las tres jugadas posibles (`piedra`, `papel`, `tijera`) y definir su comportamiento para compararlas entre sí.
        - Implementa la lógica de qué jugada gana a cuál (por ejemplo, `piedra` le gana a `tijera`).

3. **Consideraciones adicionales:**
    - Aplica los principios de herencia o polimorfismo, si es necesario.
    - Utiliza encapsulamiento para proteger los datos sensibles (por ejemplo, el estado del juego o las estrategias de los jugadores).
    - Documenta tu código de manera clara para que sea fácil de seguir usando ChatGPT o de forma manual.

  */

type TTipoMovimiento = 'piedra' | 'papel' | 'tijera';

class Movimiento {
  static movimientos: Array<TTipoMovimiento> = ['piedra', 'papel', 'tijera'];

  movimiento: TTipoMovimiento;

  constructor(movimiento: TTipoMovimiento) {
    if (!Movimiento.movimientos.includes(movimiento)) {
      throw new Error('Movimineto Inválido');
    }

    this.movimiento = movimiento;
  }

  validacion(otroMovimiento: Movimiento): boolean {
    return (
      (this.movimiento === 'piedra' &&
        otroMovimiento.movimiento === 'tijera') ||
      (this.movimiento === 'tijera' && otroMovimiento.movimiento === 'papel') ||
      (this.movimiento === 'papel' && otroMovimiento.movimiento === 'piedra')
    );
  }
}

abstract class Jugador {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  abstract hacerMovimiento(): Movimiento;
}

class Humano extends Jugador {
  hacerMovimiento(): Movimiento {
    let movimiento: TTipoMovimiento | null;

    while (!Movimiento.movimientos.includes(movimiento)) {
      movimiento = prompt(
        `${this.nombre}, elige tu jugada (piedra, papel, tijera)`
      ) as TTipoMovimiento;
    }

    return new Movimiento(movimiento);
  }
}

class Computadora extends Jugador {
  constructor() {
    super('Computadora');
  }

  elegirMovimiento(): Movimiento {
    return new Movimiento(
      Movimiento.movimientos[
        Math.floor(Math.random() * Movimiento.movimientos.length)
      ]
    );
  }

  hacerMovimiento(): Movimiento {
    return this.elegirMovimiento();
  }
}

class Juego {
  private puntos: Record<string, number> = {};

  constructor(private jugador1: Jugador, private computadora: Jugador) {}

  ronda(): void {
    const jugador1Movimiento = this.jugador1.hacerMovimiento();
    const computadoraMovimiento = this.computadora.hacerMovimiento();

    console.log(
      `¡${this.jugador1.nombre} juega ${jugador1Movimiento.movimiento}`
    );
    console.log(
      `¡${this.computadora.nombre} juega ${computadoraMovimiento.movimiento}`
    );

    let ganador: Jugador | null = null;
    if (jugador1Movimiento.validacion(computadoraMovimiento)) {
      ganador = this.jugador1;
    } else {
      ganador = this.computadora;
    }

    if (ganador) {
      console.log(`¡${ganador.nombre} gana esta ronda!`);
      this.puntos[ganador.nombre] = (this.puntos[ganador.nombre] || 0) + 1;
    } else {
      console.log('¡Es un empate!');
    }
  }

  iniciar(rondas: number = 3): void {
    for (let i = 1; i <= rondas; i++) {
      console.log(`\n--- Ronda ${i} ---`);
      this.ronda();
    }

    console.log('\n--- Resultados Finalles ---');
    console.log(
      `${this.jugador1.nombre}: ${
        this.puntos[this.jugador1.nombre] || 0
      } victorias`
    );
    console.log(
      `${this.computadora.nombre}: ${
        this.puntos[this.computadora.nombre] || 0
      } victorias`
    );

    if (
      (this.puntos[this.jugador1.nombre] || 0) >
      (this.puntos[this.computadora.nombre] || 0)
    ) {
      console.log(`${this.jugador1.nombre} es el ganador del juego!`);
    } else if (
      (this.puntos[this.computadora.nombre] || 0) >
      (this.puntos[this.jugador1.nombre] || 0)
    ) {
      console.log(`${this.computadora.nombre} es el ganador del juego!`);
    } else {
      console.log('El juego termina en empate!');
    }
  }
}

const jugador = new Humano('Christhoval');
const computadora = new Computadora();

const juego: Juego = new Juego(jugador, computadora);
juego.iniciar(3);

export const result = {};
