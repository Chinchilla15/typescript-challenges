//Solution is similar to the previous exercise, the only difference is that I use `any` instead of `infer Last` in the rest element. This is because we don't need to infer the last element, we just need to remove it from the tuple.
export type Pop<T extends any[]> = T extends [...infer First, any]
  ? First
  : never
