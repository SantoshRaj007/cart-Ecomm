import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
