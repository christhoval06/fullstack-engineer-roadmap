class Figura {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  public perimetro(): number {
    return this.base * 2 + this.altura * 2;
  }

  public area(): number {
    return this.base * this.altura;
  }
}

class Cuadrado extends Figura {}
class Rectangulo extends Figura {}

const cuadrado: Cuadrado = new Cuadrado(4, 4);
const rectangulo: Rectangulo = new Rectangulo(2, 4);

class Triangulo extends Figura {
  hipotenusa: number;

  constructor(base: number, altura: number, hipotenusa: number) {
    super(base, altura);
    this.hipotenusa = hipotenusa;
  }

  public perimetro(): number {
    return this.base + this.altura + this.hipotenusa;
  }

  public area(): number {
    return Number(((this.base * this.altura) / 2).toFixed(2));
  }
}

const triangulo: Triangulo = new Triangulo(2, 4, 3);

class Circulo extends Figura {
  radio: number;

  constructor(radio: number) {
    super(0, 0);
    this.radio = radio;
  }

  public perimetro(): number {
    return Number((2 * Math.PI * this.radio).toFixed(2));
  }

  public area(): number {
    return Number((Math.PI * Math.pow(this.radio, 2)).toFixed(2));
  }
}

const circulo: Circulo = new Circulo(4);

export const result = [
  [cuadrado.perimetro(), cuadrado.area()],
  [rectangulo.perimetro(), rectangulo.area()],
  [triangulo.perimetro(), triangulo.area()],
  [circulo.perimetro(), circulo.area()],
];
