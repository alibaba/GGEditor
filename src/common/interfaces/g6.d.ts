declare namespace G6 {
  interface Graph {
    on<T>(eventName: string, handler: T): void;
    emit(eventName: string, params: object): void;
  }
}
