//First, check if string is empty and return true if it is, false otherwise
type IsEmptyString<S extends string> = S extends '' ? true : false

//Then, infer the left and right parts of the string and replace the 'From' string with the 'To' string
type ReplaceString<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer L}${From}${infer R}` ? `${L}${To}${R}` : S

//Finally, use the Replace type to check if the 'From' string is empty and return the original string if it is, otherwise replace the 'From' string with the 'To' string
export type Replace<
  S extends string,
  From extends string,
  To extends string
> = IsEmptyString<From> extends true ? S : ReplaceString<S, From, To>
