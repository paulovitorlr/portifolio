import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule,],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
    prefix = "🟦 ";
    name = "Paulo Vitor";
    suffix = " / DESENVOLVEDOR WEB";
    navegation = [" SOBRE", "CURRÍCULO", "PROJETOS", "CONTATO"];
} 
