//Similar to the previous excercise, for this one I use ReplaceString recursively to replace all occurrences of the 'From' string with the 'To' string
type IsEmptyString<S extends string> = S extends '' ? true : false

type ReplaceString<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceString<R, From, To>}`
  : S

export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = IsEmptyString<From> extends true ? S : ReplaceString<S, From, To>