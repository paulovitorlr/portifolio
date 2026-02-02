import { Component } from '@angular/core';

//diretivas
import { NavBarDirective } from '../../directives/navbar';

@Component({
  selector: 'app-home',
  imports: [
    NavBarDirective
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
