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
