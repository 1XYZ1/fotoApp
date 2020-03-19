import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FotosComponent } from "./components/fotos/fotos.component";
import { CargarFotosComponent } from "./components/cargar-fotos/cargar-fotos.component";

const routes: Routes = [
  { path: "fotos", component: FotosComponent },
  { path: "cargar", component: CargarFotosComponent },
  { path: "**", pathMatch: "full", redirectTo: "fotos" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
