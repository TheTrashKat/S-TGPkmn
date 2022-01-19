export class Type {
    id : number;
    nombre: string;
    descripcion : string;

    constructor(_id: number, _descripcion: string,  _nombre: string) {
        this.id = _id;
        this.descripcion = _descripcion;
        this.nombre = _nombre;
    }
}