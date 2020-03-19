import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../../services/service.service";
import { FileItem } from "../../models/file-item";
import { Observable } from "rxjs";

@Component({
  selector: "app-cargar-fotos",
  templateUrl: "./cargar-fotos.component.html",
  styles: []
})
export class CargarFotosComponent implements OnInit {
  displayedColumns: string[] = ["nombreArchivo", "size"];

  archivos2: FileItem[] = [];
  dataSource: any;

  sobreElemento: boolean = false;

  constructor(public _ss: ServiceService) {}
  ngOnInit(): void {}

  CargarImagenes() {
    this._ss.CargarImagenesFirebase(this.archivos2);
  }

  limpiarArchivos() {
    this.archivos2 = [];
  }
}
