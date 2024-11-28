//This type recursively checks if any of the elements in the tuple are truthy, if so the type should return true, otherwise false
export type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? F extends false | 0 | '' | [] | { [key: string]: never }
    ? AnyOf<R>
    : true
  : false