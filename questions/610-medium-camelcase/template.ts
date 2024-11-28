export type CamelCase<S> = S extends `${infer First}-${infer Rest}`
  ? `${First}${Rest extends Capitalize<Rest> ? '-' : ''}${CamelCase<Capitalize<Rest>>}`
  : S
