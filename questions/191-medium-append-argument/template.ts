export type AppendArgument<Fn, AnyType> = Fn extends (
  ...args: infer Args
) => infer Result
  ? (...args: [...args: Args, x: AnyType]) => Result
  : never

//The functions appends the new argument to the end of the function arguments list