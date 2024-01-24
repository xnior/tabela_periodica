import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";

import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FLAGS, ELEMENT_DATA_EN, ELEMENT_DATA_PT } from "../../data/elements";
import { EDG } from "../../interface/ED.interface";
import { FLag } from "../../interface/FLag.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-listelements",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: "./listelements.component.html",
  styleUrl: "./listelements.component.scss",
})
export class ListelementsComponent {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  PT = ELEMENT_DATA_PT;
  EN = ELEMENT_DATA_EN;

  FILTER: string = "ex: Hidrogénio";
  POSITION: string = "Posição";
  NAME: string = "Nome";
  SYMBOL: string = "Simbolo";
  WEIGHT: string = "Peso";

  SOURCE_DATA: EDG[] = this.PT;

  dataSource = new MatTableDataSource(this.SOURCE_DATA);

  public changeSource(data_s: string) {
    if (data_s === "EN") {
      console.log(data_s);
      this.SOURCE_DATA = this.EN;
      this.changeDisplayed("EN");
      return this.refresh();
    } else {
      console.log(data_s);
      this.SOURCE_DATA = this.PT;
      this.changeDisplayed("PT");
      return this.refresh();
    }
  }

  refresh() {
    this.dataSource = new MatTableDataSource(this.SOURCE_DATA);
  }

  changeDisplayed(name: string) {
    if (name === "PT") {
      this.FILTER = "Filtrar";
      this.POSITION = "Posição";
      this.NAME = "Nome";
      this.SYMBOL = "Simbolo";
      this.WEIGHT = "Peso";
    } else {
      this.FILTER = "Filter";
      this.POSITION = "Position";
      this.NAME = "Name";
      this.SYMBOL = "Symbol";
      this.WEIGHT = "Weight";
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  SOURCE_FLAGS: FLag[] = FLAGS;
}
