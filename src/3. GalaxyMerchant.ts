/**
 * @author Christhoval Barba<me@christhoval.dev>
 *
 * https://github.com/christhoval06/Merchant-Guide-2-Galaxy
 */

/**
 * Roman2Arabic
 */

const romaxRegex: RegExp =
  /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

type TRomanLetter = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';
type TRomanValues = Record<TRomanLetter, number>;

const ROMAN_VALUES: TRomanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

interface Decoder {
  total: number;
  lastLetterValue: number;
}

class Roman2Arabic {
  static #instance: Roman2Arabic;

  private constructor() {}

  public static get instance(): Roman2Arabic {
    if (!Roman2Arabic.#instance) {
      Roman2Arabic.#instance = new Roman2Arabic();
    }

    return Roman2Arabic.#instance;
  }

  private isValid(roman: string): boolean {
    return romaxRegex.test(roman);
  }

  private getValueFromLetter(letter: TRomanLetter): number {
    letter = letter.toUpperCase() as TRomanLetter;

    return ROMAN_VALUES[letter] ?? 0;
  }

  private decode(roman: string): string {
    const splitedRoman = roman.split('').reverse() as TRomanLetter[];

    const reducer = splitedRoman.reduce<Decoder>(
      (acc, letter) => {
        const currentLetterValue = this.getValueFromLetter(letter);

        if (acc.lastLetterValue > currentLetterValue) {
          acc.total -= currentLetterValue;
        } else {
          acc.total += currentLetterValue;
        }

        acc.lastLetterValue = currentLetterValue;

        return acc;
      },
      { total: 0, lastLetterValue: 0 }
    );

    return reducer.total.toString();
  }

  public roman2ArabicNumber(roman: string): string | null {
    if (!this.isValid(roman)) {
      return null;
    }

    return this.decode(roman);
  }
}

const s1 = Roman2Arabic.instance;

const sample = 'XXIV';
export const result = [sample, 'mmx'.toUpperCase()].map((r) =>
  s1.roman2ArabicNumber(r)
);
