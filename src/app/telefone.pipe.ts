import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(telefone: string): string {
    try {
      let result: string;
      result = "";
      telefone = (telefone) ? telefone.toString().replace(/[^\d]+/g, '') : telefone;

      result = (telefone.length > 11)?"+"+telefone.substring(0,2):"";
      result += (telefone.length > 9)?" ("+telefone.substring(2,4)+")":"";
      result += telefone.substring(5);

      return result;
    } catch (e) {
      return null;
    }
  }

}
