// no dependency error, wrong require in remote module
export class DependencyError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

// fetch jsfile 404
export class NotFoundError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
