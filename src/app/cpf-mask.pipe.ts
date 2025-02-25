import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfMask'
})
export class CpfMaskPipe implements PipeTransform {

  transform(value: string | number): string {
    if (!value) return '';

    let cpf = value.toString().replace(/\D/g, '').slice(0, 11);

    if (cpf.length === 11) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    return cpf;
  }
}
