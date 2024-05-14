import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ProductCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    categoryList = ['Jeans', 'T-Shirt', 'Shirt', 'Footware' , 'Jacket'];

    productList = [
        {
            productId: 1, productName: "Men T-shirt", productImage: "../../../assets/product/img01.png",
            desc: "Mens Polo T-Shirt", isOffer: false, category: "Jeans", price: 1250, discount: 15, availableQty: 0, bgColor: '#fffceb',rating: 4
        },
        {
            productId: 2, productName: "Men T-shirt", productImage: "../../../assets/product/img02.png",
            desc: "Black Polo T-Shirt", isOffer: true, category: "T-Shirt", price: 1250, discount: 20, availableQty: 5, bgColor: '#ecffec', rating: 5
        },
        {
            productId: 3, productName: "Men T-shirt", productImage: "../../../assets/product/img03.png",
            desc: "Mens Polo T-Shirt", isOffer: false, category: "Jeans", price: 1250, discount: 22, availableQty: 5, bgColor: '#feefea', rating: 3
        },
        {
            productId: 4, productName: "Men T-shirt", productImage: "../../../assets/product/img04.png",
            desc: "Mens Polo T-Shirt", isOffer: true, category: "Shirt", price: 1250, discount: 25, availableQty: 5, bgColor: '#fff3eb', rating: 2
        },
        {
            productId: 5, productName: "Men T-shirt", productImage: "../../../assets/product/img05.png",
            desc: "Mens Polo T-Shirt", isOffer: true, category: "Footware", price: 1250, discount: 10, availableQty: 5, bgColor: '#fff3ff', rating: 3
        },
        {
            productId: 6, productName: "Men T-shirt", productImage: "../../../assets/product/img06.png",
            desc: "Mens Polo T-Shirt", isOffer: false, category: "Jacket", price: 1250, discount: 20, availableQty: 5, bgColor: '#f2fce4', rating: 4
        },
        {
            productId: 7, productName: "Men T-shirt", productImage: "../../../assets/product/img07.png",
            desc: "Mens Polo T-Shirt", isOffer: true, category: "Footware", price: 1250, discount: 15, availableQty: 5, bgColor: '#feefea', rating: 3
        },
        {
            productId: 8, productName: "Women T-shirt", productImage: "../../../assets/product/img08.png",
            desc: "Women Polo T-Shirt", isOffer: true, category: "T-Shirt", price: 1250, discount: 15, availableQty: 5, bgColor: '#fffceb', rating: 1
        },
        {
            productId: 9, productName: "Women T-shirt", productImage: "../../../assets/product/img09.png",
            desc: "Women Polo T-Shirt", isOffer: false, category: "Shirt", price: 1250, discount: 10, availableQty: 5, bgColor: '#feefea', rating: 3
        },
        {
            productId: 10, productName: "Men T-shirt", productImage: "../../../assets/product/img10.png",
            desc: "Men Polo T-Shirt", isOffer: true, category: "T-Shirt", price: 1250, discount: 20, availableQty: 5, bgColor: '#ecffec', rating: 5
        }
    ]

    filterProducts: any [] = [];

    selectedCategory: string = '';

    constructor() {
        this.filterProducts = this.productList;
    }

    filterCategory(category: string) {
        if(this.selectedCategory == category){
            this.selectedCategory = '';
            this.filterProducts = this.productList;
        } else {
            this.selectedCategory = category;
            const products = this.productList.filter( prod=> prod.category == category);
            this.filterProducts = products;
        }        
    }
}
