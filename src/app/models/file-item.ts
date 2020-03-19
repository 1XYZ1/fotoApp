export class FileItem {
  public archivo?: File;
  public nombreArchivo?: string;
  public url?: string;
  public subiendo?: boolean;
  public progreso?: number;
  public size?: number;

  constructor(archivo: File) {
    this.archivo = archivo;
    this.nombreArchivo = archivo.name;
    this.size = archivo.size;

    this.subiendo = false;
    this.progreso = 0;
  }
}
