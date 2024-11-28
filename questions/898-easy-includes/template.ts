export type Includes<T extends any[], U> = U extends T[any]
  ? true
  : false
