import _ from 'lodash'

type Length<T extends any[]> = T extends { length: infer L } ? L : never
type BuildTuple<L extends number, T extends any[] = []> = T extends { length: L } ? T : BuildTuple<L, [...T, any]>
type Add<A extends number, B extends number> = Length<[...BuildTuple<A>, ...BuildTuple<B>]>
type Prettify<T> = T extends object ? { [K in keyof T]: Prettify<T[K]> } : T

type PlusResult<TLeft, TRight> = {
  [TKey in keyof TLeft | keyof TRight]: Add<
    TKey extends keyof TLeft ? (TLeft[TKey] extends number ? TLeft[TKey] : 0) : 0,
    TKey extends keyof TRight ? (TRight[TKey] extends number ? TRight[TKey] : 0) : 0
  >
}

function plus<TLeft, TRight>(left: TLeft, right: TRight): Prettify<PlusResult<TLeft, TRight>> {
  return _.mergeWith({}, left, right, (left, right) => {
    if (_.isNumber(left)) {
      return left + right
    }
  }) as Prettify<PlusResult<TLeft, TRight>>
}

function combine<R1, R2>(r1: R1, r2: R2): Prettify<PlusResult<R1, R2>>
function combine<R1, R2, R3>(r1: R1, r2: R2, r3: R3): Prettify<PlusResult<R1, PlusResult<R2, R3>>>
function combine<R1, R2, R3, R4>(
  r1: R1,
  r2: R2,
  r3: R3,
  r4: R4,
): Prettify<PlusResult<R1, PlusResult<R2, PlusResult<R3, R4>>>>
function combine<R1, R2, R3, R4, R5>(
  r1: R1,
  r2: R2,
  r3: R3,
  r4: R4,
  r5: R5,
): Prettify<PlusResult<R1, PlusResult<R2, PlusResult<R3, PlusResult<R4, R5>>>>>
function combine<R1, R2, R3, R4, R5, R6>(
  r1: R1,
  r2: R2,
  r3: R3,
  r4: R4,
  r5: R5,
  r6: R6,
): Prettify<PlusResult<R1, PlusResult<R2, PlusResult<R3, PlusResult<R4, PlusResult<R5, R6>>>>>>
function combine<R1, R2, R3, R4, R5, R6, R7>(
  r1: R1,
  r2: R2,
  r3: R3,
  r4: R4,
  r5: R5,
  r6: R6,
  r7: R7,
): Prettify<PlusResult<R1, PlusResult<R2, PlusResult<R3, PlusResult<R4, PlusResult<R5, PlusResult<R6, R7>>>>>>>

function combine(...results: object[]) {
  return results.reduce(plus, {})
}

export { combine, plus }
