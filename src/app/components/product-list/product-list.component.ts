import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  products = [
    {
      name: 'Roller Coaster Tee',
      description: 'Soft cotton tee with a fun roller coaster graphic.',
      price: 24.99,
      image: '/assets/HP-Tshirt2.jpeg'
    },
    {
      name: 'Park Cap',
      description: 'Classic cap to keep you cool and shaded at the park.',
      price: 18.99,
      image: '/assets/HP-Cap.jpeg'
    },
    {
      name: 'Tote Bag',
      description: 'Reusable tote bag for all your park essentials.',
      price: 12.5,
      image: '/assets/HP-Bag.jpeg'
    },
    {
      name: 'Park Hoodie',
      description: 'Cozy hoodie for chilly park nights.',
      price: 39.99,
      image: '/assets/HP-Hoodie.png'
    }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    // Add product to cart logic here (not implemented yet)
    this.cartService.openDrawer();
  }
}
