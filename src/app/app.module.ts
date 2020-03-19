// Modulos
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "./material.module";
// Componentes
import { AppComponent } from "./app.component";
import { FotosComponent } from "./components/fotos/fotos.component";
import { CargarFotosComponent } from "./components/cargar-fotos/cargar-fotos.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { ServiceService } from "./services/service.service";
import { NgDropFilesDirective } from "./directives/ng-drop-files.directive";

// FIREBASE
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargarFotosComponent,
    MainNavComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
