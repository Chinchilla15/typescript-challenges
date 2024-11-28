//Similar to the previois exercise, but for this one I trim left and right with the same logic to get the final result
type Whitespace = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${Whitespace}${infer Rest}`
  ? TrimLeft<Rest>
  : S
type TrimRight<S extends string> = S extends `${infer Rest}${Whitespace}`
  ? TrimRight<Rest>
  : S
  
export type Trim<S extends string> = TrimLeft<TrimRight<S>>
