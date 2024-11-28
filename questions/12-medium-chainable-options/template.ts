type ChainableOption<T, Key extends string, Value> = Chainable<T & { [Property in Key]: Value }>

export type Chainable<T = {}> = {
  option<Key extends string, Value>(key: Key, value: Value): ChainableOption<T, Key, Value>
  get(): T
}
