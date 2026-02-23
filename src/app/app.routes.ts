import { Routes } from '@angular/router';
import { Home } from '../app/components/home/home'
import { Curriculo } from './components/curriculo/curriculo';

export const routes: Routes = [
     {path: 'home', component: Home},
     {path: 'curriculo', component: Curriculo}
];
