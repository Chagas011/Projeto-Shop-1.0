export class NotFound extends Error {
  constructor(id: string) {
    super(`Product with ${id} Not Found`);
    this.name = 'ProductNotFound';
  }
}

export class ProductAlreadyExistError extends Error {
  constructor(name: string) {
    super(`Product with name ${name} already exists`);
    this.name = 'ProductAlreadyExistError';
  }
}
