import { Component, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from "@angular/material/dialog";
import { chemicalElement } from "../../interface/CHemelem.interface";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-table-dialog",
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatButtonModule],
  templateUrl: "./table-dialog.component.html",
  styleUrl: "./table-dialog.component.scss",
})
export class TableDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: chemicalElement,
    public matReference: MatDialogRef<TableDialogComponent>
  ) {}

  closeDialog() {
    this.matReference.close();
  }
}
