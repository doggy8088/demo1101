import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badwords'
})
export class BadwordsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
