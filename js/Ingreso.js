class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor); //llama al constructor del padre
        this._id = ++Ingreso.contadorIngresos;
    }

    get id() {
        return this._id;
    }
}