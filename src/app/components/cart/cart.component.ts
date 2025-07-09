import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.less'
})
export class CartComponent implements OnInit, OnDestroy {
  isCartOpen = false;
  private drawerSub!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.drawerSub = this.cartService.drawerOpen$.subscribe(open => {
      this.isCartOpen = open;
    });
  }

  ngOnDestroy() {
    this.drawerSub?.unsubscribe();
  }

  openCart() {
    this.isCartOpen = true;
  }

  closeCart() {
    this.cartService.closeDrawer();
  }
}
