import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { TableComponent } from "./pages/table/tabela.component";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TableComponent,
    RouterLink,
    NgbNavModule
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "TABELA_PERIODICA";
}
