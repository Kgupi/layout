import { Injectable } from '@angular/core';

@Injectable()
export class MatLayoutService {
  constructor() { }
  sayHello(name?: String) {
    return `Hello ${name || 'Stanger'}!`;
  }
}
