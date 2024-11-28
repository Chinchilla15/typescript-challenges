//This type recursively generates all permutations of 'T' by iterating over it and recursively calling itself with the remaining keys
export type Permutation<T, Key = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<Key, T>>]
  : never