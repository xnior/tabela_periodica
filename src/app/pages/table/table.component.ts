import { Component, inject } from "@angular/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { TableDialogComponent } from "../../dialog/table-dialog/table-dialog.component";
import { chemicalElements } from "../../../assets/DB/elements";

@Component({
  selector: "app-table",
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule],
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.scss",
})
export class TableComponent {
  #dialog = inject(MatDialog);
  #elements = chemicalElements;

  public showClass(data: HTMLElement) {
    const filters = document.querySelectorAll("." + data.className);
    filters.forEach(function (el, filters) {
      setTimeout(function () {
        el.classList.add("animGroup");
      }, 50 * filters);
    });
  }

  public remove(data: HTMLElement) {
    const filters = document.querySelectorAll(data.className + ", .animGroup");

    filters.forEach(function (el) {
      el.classList.remove("animGroup");
    });
  }
  openDialog(element: string) {
    this.#elements.forEach((el) => {
      if (el.symbol === element) {
        const data = el;
        this.#dialog.open(TableDialogComponent, {
          data,
          position: { top: '3%', left: '35%'},
        });
      }
    });
  }
}
