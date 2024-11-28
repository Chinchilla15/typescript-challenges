export type Absolute<
  Type extends number | string | bigint
> = `${Type}` extends `${infer Value}`
  ? Value extends `-${infer Value}`
    ? Value
    : `${Value}`
  : never