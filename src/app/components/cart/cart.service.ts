import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private drawerOpenSubject = new BehaviorSubject<boolean>(false);
  drawerOpen$ = this.drawerOpenSubject.asObservable();

  openDrawer() {
    this.drawerOpenSubject.next(true);
  }

  closeDrawer() {
    this.drawerOpenSubject.next(false);
  }
} 