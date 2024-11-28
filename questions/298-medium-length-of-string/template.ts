// For this exercise I needed to convert the string into an iterable tuple so that I can get the length of said tuple
type StringToTuple<
  S extends string,
  T extends any[] = []
> = S extends `${infer First}${infer Rest}`
  ? StringToTuple<Rest, [First, ...T]>
  : T

// Once the string was converted to a tuple I could easily get the length of the tuple by using the ['length'] property
export type LengthOfString<S extends string> = StringToTuple<S>['length']