export class DependencyError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class NotFoundError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
