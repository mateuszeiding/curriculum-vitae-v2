export {}

declare global {
  type PropsOf<T> =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends new (...args: any) => ComponentPublicInstance<infer P> ? P : never

  type MaybePromise<T> = Promise<T> | T
}
