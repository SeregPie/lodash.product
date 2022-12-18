type AnyCollection<T> = Iterable<T> | ArrayLike<T> | Record<any, T>;

declare module _ {
	interface LoDashStatic {
		product<T>(...collections: Array<AnyCollection<T>>): Array<Array<T>>;
	}
}
