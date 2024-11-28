export type MyPick<Type, Keys extends keyof Type> = {
  [Property in Keys]: Type[Property]
}
