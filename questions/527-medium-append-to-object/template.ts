export type AppendToObject<T, U extends string, Value> = {
  [Key in keyof T | U]: Key extends keyof T ? T[Key] : Value
}