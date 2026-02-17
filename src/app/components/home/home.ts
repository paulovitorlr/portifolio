import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavBar,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
