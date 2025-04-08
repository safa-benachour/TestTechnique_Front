import {
  Component,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { PanierServiceService } from "app/products/data-access/panier-service.service";
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button'
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent, BadgeModule,ButtonModule],
})
export class AppComponent {

  constructor(public panierServiceService: PanierServiceService) {}

  title = "ALTEN SHOP";
}
