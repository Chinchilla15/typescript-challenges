export type If<Condition extends boolean, TrueType, FalseType> = Condition extends true ? TrueType : FalseType
