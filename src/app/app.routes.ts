import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { TableComponent } from "./pages/table/table.component";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";


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
