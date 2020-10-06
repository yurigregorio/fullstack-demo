import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exemplos'
})
export class ExemplosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
