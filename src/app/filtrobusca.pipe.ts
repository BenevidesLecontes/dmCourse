import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filtrobusca'
})
export class FiltrobuscaPipe implements PipeTransform {

  transform(value: any[], busca: string, prop: string): any {
    console.log(value);
    if (!value || value && !value.length) {
      return value;
    }
    return value.filter(item => {
      console.log(item);
      return item && item[prop] && busca ? item[prop].toUpperCase().indexOf(busca.toUpperCase()) !== -1 : item;
    });
  }

}
