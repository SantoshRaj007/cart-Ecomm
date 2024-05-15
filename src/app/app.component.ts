import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './pages/service/product.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    productService = inject(ProductService);

    isCartVisiable: boolean = false;

    cartItems: any [] = [];


    constructor() {
        this.productService.onAddToCarts.subscribe((res:any)=>{
            debugger;
            this.cartItems.unshift(res)
        })
    }

    showCart() {
        this.isCartVisiable = !this.isCartVisiable;
    }

    removeProduct(index:number){
        this.cartItems.splice(index,1)
    }
}
