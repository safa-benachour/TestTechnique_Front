import { Component } from '@angular/core';
import { Product } from "app/products/data-access/product.model";
import { PanierServiceService } from "app/products/data-access/panier-service.service";
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [DataViewModule, CardModule, ButtonModule, DialogModule,CommonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  panierItems: Product[] = [];

  constructor(private panierServiceService: PanierServiceService) {}

  ngOnInit() {
    this.panierItems = this.panierServiceService.panierItems();
  }
  removeFromPanier(product: Product) {
    this.panierServiceService.removeFromPanier(product);
    this.panierItems = this.panierServiceService.panierItems();  // Mettre à jour la liste après suppression
  }

  // Calcul du prix total
  getTotalPrice(): number {
    return this.panierItems.reduce((total, product) => total + product.price, 0);
  }
}
