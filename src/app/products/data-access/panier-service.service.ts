import { Injectable, inject, signal } from '@angular/core';
import {Product} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {

  constructor() { }

  private panierItemsSignal = signal<Product[]>([]);
  panierItems = this.panierItemsSignal.asReadonly();

  ajouterPanier(product: Product) {
    this.panierItemsSignal.update(items => [...items, product]);
  }

  removeFromPanier(product: Product) {
    this.panierItemsSignal.update(items =>
      items.filter(item => item.id !== product.id)
    );
  }

  ViderPanier() {
    this.panierItemsSignal.set([]);
  }
}
