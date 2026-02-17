import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { NavBar } from '../nav-bar/nav-bar';
import { Apresentacao } from '../apresentacao/apresentacao';

//directives
import { OlaDirective } from "../../directives/ola.directive";

@Component({
  selector: 'app-home',
  imports: [NavBar,CommonModule,Apresentacao, OlaDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
