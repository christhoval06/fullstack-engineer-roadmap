# FullStack Engineer [Roadmap](https://roadmap.sh/r?id=664d02f8d6b907c7f7389a5f) by [@christhoval](https://gitbuh.com/christhoval06)

## Tema 1: Estructuras de datos y Algoritmos

## Problema: Generación de cuadrados Concéntricos
Eres un ingeniero de softaware Jr y se te pide que escribas una función en TypeScript que genere un cuadrado con un número `n`  cuadrados concéntricos formados por un `border` dado y los espacios deben estar `rellenos` por otro caracater dado.

## Requerimientos:
- La figura debe tener un tamaño n (donde n es un número mayor a 0).
- La figura debe contener cuadrados concéntricos formados por un caracter dado por el usuario ejemplo `*`.
- Cada cuadrado concéntrico debe estar separado por una línea de un carácter dado por el usuario de los otros cuadrados.

## Ejemplo
```ts
funtion generarCuadrados(largo: number = 4, bordes: string = '*' relleno: string = ' '): string {
    ...
}
```

```ts
generarCuadrados(10);
* * * * * * * * * * * 
*                   * 
*   * * * * * * *   * 
*   *           *   * 
*   *   * * *   *   * 
*   *   *   *   *   * 
*   *   * * *   *   * 
*   *           *   * 
*   * * * * * * *   * 
*                   * 
* * * * * * * * * * * 
```

```ts
generarCuadrados(5, '■ ', '0 ');
■ ■ ■ ■ ■ 
■ 0 0 0 ■ 
■ 0 ■ 0 ■ 
■ 0 0 0 ■ 
■ ■ ■ ■ ■ 
```

```ts
generarCuadrados(25, '1 ', '0 ');
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 
1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 
1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 0 1 
1 0 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 1 
1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 1 0 0 0 0 0 0 0 1 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 0 1 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 1 0 1 0 0 0 1 0 1 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 1 0 1 0 0 0 1 0 1 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 0 1 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 1 0 0 0 0 0 0 0 1 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 1 0 1 
1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 0 1 0 1 
1 0 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 1 
1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 0 1 
1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 
1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 
1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
```




