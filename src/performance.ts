type AnyFunc<R> = (...args: Array<any>) => R;
type ReturnFunc<E extends AnyFunc<ReturnType<E>>> = (
  ...args: Parameters<E>
) => ReturnType<E>;

export function performanceChecker<E extends AnyFunc<ReturnType<E>>>(
  func: E
): ReturnFunc<E> {
  const funcName: string = func.name;
  return function (...args: Parameters<E>): ReturnType<E> {
    console.time(funcName);
    window.performance.mark(`${funcName}Start`);
    const start = window.performance.now();
    const results = func(...args);
    const end = window.performance.now();
    console.log(
      window.performance.measure(`${funcName}Duration`, `${funcName}Start`)
    );
    // window.performance.mark(`${funcName}End`);
    console.log(`${funcName} Time: ${end - start} ms`);
    console.timeEnd(funcName);
    return results;
  };
}
