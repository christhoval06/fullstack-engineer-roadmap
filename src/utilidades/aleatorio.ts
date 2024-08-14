/**
 * Genera un número aleatorio entre min y max (ambos inclusive)
 * @param min - Valor mínimo del rango
 * @param max - Valor máximo del rango
 * @returns Un número entero aleatorio entre min y max
 */
export function numeroAleatorio(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
