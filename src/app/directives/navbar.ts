import { Directive, ElementRef, inject, OnInit } from "@angular/core";
import { elementAt } from "rxjs";       

@Directive({
    selector: '[NavBar]',
    standalone: true
})

export class NavBarDirective implements OnInit{
    el = inject(ElementRef).nativeElement as HTMLElement;

  ngOnInit(): void {
    //configuração de tela
    this.el.style.display = 'flex';
    this.el.style.justifyContent = 'space-between';
    this.el.style.alignItems = 'center';
    

    //style
    this.el.style.backgroundColor = '#000';
    this.el.style.color = '#FFF';
    this.el.style.padding = '50px';


}
}