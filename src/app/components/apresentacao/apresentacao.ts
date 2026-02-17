import { Component } from '@angular/core';
//diretivas
import { ApresentacaoDirective } from '../../directives/apresentacao.directive';


@Component({
  selector: 'app-apresentacao',
  imports: [
    ApresentacaoDirective,
  ],
  templateUrl: './apresentacao.html',
  styleUrl: './apresentacao.scss',
})
export class Apresentacao {
  nome = "Paulo Vitor";
  profissao = "Desenvolvedor Web"
}
