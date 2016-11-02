import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badwords'
})
export class BadwordsPipe implements PipeTransform {

  transform(value: string, args?: string[]): any {
    for(let v of args) {
      value = value.replace(v, '***');
    }
    return value;
  }

}
