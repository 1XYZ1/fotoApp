import { Injectable } from "@angular/core";
//FIREBASE
import { AngularFirestore } from "@angular/fire/firestore";
import { FileItem } from "../models/file-item";
import * as firebase from "firebase";
@Injectable({
  providedIn: "root"
})
export class ServiceService {
  private CARPETA_IMAGENES = "img";
  constructor(private firestore: AngularFirestore) {}

  private guardarImagen(imagen: { nombre: string; url?: string }) {
    this.firestore
      .collection("/img")
      .add({
        nombre: imagen.nombre,
        url: imagen.url
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  CargarImagenesFirebase(imagenes: FileItem[]) {
    const storageRef = firebase.storage().ref();
    for (const item of imagenes) {
      item.subiendo = true;
      if (item.progreso >= 100) {
        continue;
      }
      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
        .put(item.archivo);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,

        (snapshot: firebase.storage.UploadTaskSnapshot) =>
          (item.progreso =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        error => console.error("Error al subir", error),
        () => {
          console.log("Imagen cargada correctamente");

          uploadTask.snapshot.ref.getDownloadURL().then(url => {
            item.url = url;
            item.subiendo = false;
            console.log(item.url);
            console.log(item.progreso);
            this.guardarImagen({
              nombre: item.nombreArchivo,
              url: item.url
            });
          });
        }
      );
    }
  }
}
