type CallbackFn<T, M> = (value: T[keyof T], key: keyof T, index: number) => M

function objectMap<T extends object, M>(obj: T, fn: CallbackFn<T, M>) {
  return Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k as keyof T, i)])) as { [K in keyof T]: M }
}

export default objectMap
