# FullStack Engineer [Roadmap](https://roadmap.sh/r?id=664d02f8d6b907c7f7389a5f) by [@christhoval](https://gitbuh.com/christhoval06)

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

## Problema 2: Suma de un lista de números
Se require que como ingeniero jr; escribas una función que sume una lista de valores dados por el usuario

### Requerimientos:
- se requere validar que los valores dados sean números
- si el valor no es un número nos lo saltamos.

### Data de pruebas
```ts
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));
Salida :
6
-97
6
```



