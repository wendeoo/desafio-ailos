import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.scss']
})
export class CpfComponent {
  locked = true;
  cpf: string = '';
  erroCpf = false;
  consultaSucesso = false;
  userName: string = 'Mariane de Sousa Oliveira';
  @Output() consultaChange = new EventEmitter<boolean>();

  constructor() { }

  formatarCpf(value: string | null): string {
    if (!value) return '';
  
    let cpf = value.replace(/\D/g, '').slice(0, 11);
  
    if (cpf.length >= 9) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    } else if (cpf.length >= 6) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    } else if (cpf.length >= 3) {
      cpf = cpf.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    }
  
    return cpf;
  }

  onCpfInput(event: Event) {
    this.consultaSucesso = false;
    this.consultaChange.emit(this.consultaSucesso);
    this.erroCpf = false;
    const input = event.target as HTMLInputElement;
    this.cpf = this.formatarCpf(input.value);
    if (this.cpf.length == 14) {
      this.locked = false;
    } else {
      this.locked = true;
    }
  }

  validaCpf(cpf: string): boolean {
    if (!cpf) return false;
  
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf.charAt(9))) return false;
  
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }

    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf.charAt(10))) return false;
  
    return true;
  }  

  verificarCpf(cpf: string) { 
    if (!this.locked) {
    this.validaCpf(cpf);
      if (!this.validaCpf(cpf)) {
        this.erroCpf = true;
      } else {
        this.consultaSucesso = true;
        this.consultaChange.emit(this.consultaSucesso);
        this.erroCpf = false;
      }     
    } 
    return this.erroCpf;
  }
}
