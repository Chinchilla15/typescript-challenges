export declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T],
): Promise<
  {
    [Key in keyof T]: T[Key] extends Promise<infer U> ? U : T[Key]
  }
>

// Example usage:
const case1 = PromiseAll([1, 2, 3] as const)
const case2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const case3 = PromiseAll([1, 2, Promise.resolve(3)])
