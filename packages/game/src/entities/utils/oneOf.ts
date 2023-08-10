type OneOf<T extends any[]> = {
  oneOf: T
}

function oneOf<T extends any[]>(...oneOf: T): OneOf<T> {
  return { oneOf }
}

export type { OneOf }
export default oneOf
