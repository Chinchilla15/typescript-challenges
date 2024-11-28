// First I create a type that will make all properties of an object readonly
type PropertiesReadonly<T extends object> = {
  readonly [Key in keyof T]: T[Key] extends (...args: any[]) => any
    ? T[Key]
    : DeepReadonly<T[Key]>
}

// Then I create a type that checks if 'T' is an object and if it is, it will make all properties of the object readonly
export type DeepReadonly<T> = T extends object ? PropertiesReadonly<T> : T
