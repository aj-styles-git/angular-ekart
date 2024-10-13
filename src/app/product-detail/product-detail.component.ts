// product-detail.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  // Using @Input to receive the product data from parent
  @Input() product!: { id: number, name: string, price: number };
    // Output to send selected product back to parent
    @Output() productSelected = new EventEmitter<{ id: number, name: string, price: number }>();

  // Function to handle product selection
  selectProduct() {
    this.productSelected.emit(this.product);
  }
}
