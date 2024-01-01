import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  inject,
} from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-table",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.scss",
})
export class TableComponent {
  public showClass(data: HTMLElement) {
    const filters = document.querySelectorAll("." + data.className);
    filters.forEach(function (el, filters) {
      setTimeout(function () {
        el.classList.add("animGroup");
      }, 10 * filters);
    });
  }

  public remove(data: HTMLElement) {
    
    const filters = document.querySelectorAll(data.className + ", .animGroup");

    filters.forEach(function (el) {
      el.classList.remove("animGroup");
    });
  }
}
