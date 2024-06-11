import { performanceChecker } from './performance.ts';

/**
 * Fizz Buzz Problem states that given an integer n, for every integer i <= n,
 * the task is to print “FizzBuzz” if i is divisible by 3 and 5,
 * “Fizz” if i is divisible by 3,
 * “Buzz” if i is divisible by 5
 * or i (as a string) if none of the conditions are true.
 */

// UpperCamelCase

function Range(len: number): Array<number> {
  return [...Array(len).keys()];
}

function FizzBuzz(len: number): Array<number | string> {
  return Range(len).map<string>((value: number) => {
    value += 1;
    return (
      `${value % 3 == 0 ? 'Fizz' : ''}${value % 5 == 0 ? 'Buzz' : ''}` ||
      String(value)
    );
  });
}

/**
 * The Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers, commonly denoted Fn . The sequence commonly starts from 0 and 1, although some authors start the sequence from 1 and 1 or sometimes (as did Fibonacci) from 1 and 2. Starting from 0 and 1, the sequence begins[1]

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ....

A tiling with squares whose side lengths are successive Fibonacci numbers: 1, 1, 2, 3, 5, 8, 13 and 21
The Fibonacci numbers were first described in Indian mathematics as early as 200 BC in work by Pingala on enumerating possible patterns of Sanskrit poetry formed from syllables of two lengths.[2][3][4] They are named after the Italian mathematician Leonardo of Pisa, also known as Fibonacci, who introduced the sequence to Western European mathematics in his 1202 book Liber Abaci.[5]
 */

function Fibonacci(n: number): Array<number> {
  // if(n <= 1) {
  //   return 1
  // }

  // let n = 1;
  const limite = n;

  const fibonacci = [0, 1];

  while (fibonacci.length < limite) {
    const currentIndex = fibonacci.length;
    fibonacci.push(fibonacci[currentIndex - 1] + fibonacci[currentIndex - 2]);
  }

  return fibonacci;
}

function FibonacciRecursive(
  n: number,
  memo: Record<number, number> = {}
): number {
  if (n < 2) {
    return n;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }
  memo[n] = FibonacciRecursive(n - 1, memo) + FibonacciRecursive(n - 2, memo);
  return memo[n];
}

console.log(FibonacciRecursive(10));

export const result = {
  n: performanceChecker(Fibonacci)(15),
  r: performanceChecker(function recursive(n: number) {
    return Range(n).map((index) => FibonacciRecursive(index));
  })(15),
};
