// First I get the keys of the provided objects
type Keys<First, Second> = keyof First | keyof Second

// Then I get the value of the provided key
type Value<First, Second, Keys> = Keys extends keyof Second
  ? Second[Keys]
  : Keys extends keyof First
  ? First[Keys]
  : never

// Finally I merge the provided objects
export type Merge<F, S> = {
  [K in Keys<F, S>]: Value<F, S, K>
}

// type keys = Keys<{ a: number }, { b: string }> // expected to be "a" | "b"
// type value = Value<{ a: number }, { b: string }, 'a'> // expected to be number
// type case1 = Merge<Foo, Bar> // expected to be { a: number; b: number; }
