// product-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // Array of products to be passed to the child component
  products = [
    { id: 1, name: 'Laptop', price: 800 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
  ];

    // Method to handle the product selected event
    onProductSelected(product: { id: number, name: string, price: number }) {
      console.log('Product selected:', product);
    }
}
