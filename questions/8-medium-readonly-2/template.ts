// First I create a type that excludes the keys that will remain mutable.
type ExcludeFromReadOnly<T, K> = {
  [Property in Exclude<keyof T, K>]: T[Property]
}
// Then I create a type that makes the keys in K readonly and then combines it with the type that excludes the keys that will remain mutable.
export type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} &
  ExcludeFromReadOnly<T, K>
