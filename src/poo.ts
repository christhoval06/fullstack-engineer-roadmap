/**
 * Clase base que representa una figura geométrica.
 */
class Figura {
  base: number; // La base de la figura
  altura: number; // La altura de la figura

  /**
   * Constructor de la clase Figura.
   * @param base - La base de la figura.
   * @param altura - La altura de la figura.
   */
  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  /**
   * Calcula el perímetro de la figura.
   * @returns El perímetro de la figura.
   */
  public perimetro(): number {
    return this.base * 2 + this.altura * 2;
  }

  /**
   * Calcula el área de la figura.
   * @returns El área de la figura.
   */
  public area(): number {
    return this.base * this.altura;
  }
}

/**
 * Clase que representa un cuadrado.
 * Extiende de la clase Figura.
 */
class Cuadrado extends Figura {
  constructor(lado: number) {
    super(lado, lado);
  }
}

/**
 * Clase que representa un rectángulo.
 * Extiende de la clase Figura.
 */
class Rectangulo extends Figura {}

// Crear instancias de Cuadrado y Rectángulo
const cuadrado: Cuadrado = new Cuadrado(4);
const rectangulo: Rectangulo = new Rectangulo(2, 4);

/**
 * Clase que representa un triángulo.
 * Extiende de la clase Figura.
 */
class Triangulo extends Figura {
  hipotenusa: number; // La hipotenusa del triángulo

  /**
   * Constructor de la clase Triangulo.
   * @param base - La base del triángulo.
   * @param altura - La altura del triángulo.
   * @param hipotenusa - La hipotenusa del triángulo.
   */
  constructor(base: number, altura: number, hipotenusa: number) {
    super(base, altura);
    this.hipotenusa = hipotenusa;
  }

  /**
   * Calcula el perímetro del triángulo.
   * @returns El perímetro del triángulo.
   */
  public perimetro(): number {
    return this.base + this.altura + this.hipotenusa;
  }

  /**
   * Calcula el área del triángulo.
   * @returns El área del triángulo.
   */
  public area(): number {
    return Number(((this.base * this.altura) / 2).toFixed(2));
  }
}

// Crear una instancia de Triangulo
const triangulo: Triangulo = new Triangulo(2, 4, 3);

/**
 * Clase que representa un círculo.
 * Extiende de la clase Figura.
 */
class Circulo extends Figura {
  radio: number; // El radio del círculo

  /**
   * Constructor de la clase Circulo.
   * @param radio - El radio del círculo.
   */
  constructor(radio: number) {
    super(0, 0);
    this.radio = radio;
  }

  /**
   * Calcula el perímetro del círculo (circunferencia).
   * @returns El perímetro del círculo.
   */
  public perimetro(): number {
    return Number((2 * Math.PI * this.radio).toFixed(2));
  }

  /**
   * Calcula el área del círculo.
   * @returns El área del círculo.
   */
  public area(): number {
    return Number((Math.PI * Math.pow(this.radio, 2)).toFixed(2));
  }
}

// Crear una instancia de Circulo
const circulo: Circulo = new Circulo(4);

// Exportar los resultados de los cálculos
export const result = [
  [cuadrado.perimetro(), cuadrado.area()],
  [rectangulo.perimetro(), rectangulo.area()],
  [triangulo.perimetro(), triangulo.area()],
  [circulo.perimetro(), circulo.area()],
];
