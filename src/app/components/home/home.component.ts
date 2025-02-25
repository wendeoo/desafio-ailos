import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  consultaSucesso: boolean = false;

  constructor() { }

  atualizarConsultaSucesso(valor: boolean) {
    this.consultaSucesso = valor;
  }
}
