import { Component, importProvidersFrom } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';
import { CurriculoDirective } from '../../directives/curriculo.directive';
@Component({
  selector: 'app-projetos',
  imports: [NavBar, Footer, CurriculoDirective],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos {

  titulo = "🟦 Projetos"
}
