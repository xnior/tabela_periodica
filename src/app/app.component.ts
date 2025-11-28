import { Component } from "@angular/core";

import { RouterLink, RouterOutlet } from "@angular/router";

import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { TableComponent } from "./pages/table/table.component";


@Component({
    selector: "app-root",
    imports: [
    RouterOutlet,
    TableComponent,
    RouterLink,
    NgbNavModule
],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent {
  title = "TABELA_PERIODICA";
}
