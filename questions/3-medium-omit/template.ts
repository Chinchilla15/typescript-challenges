//For this excercise I remapped Keys in Union Types
export type MyOmit<T, K> = { [Property in keyof T as Property extends K ? never : Property]: T[Property] }
