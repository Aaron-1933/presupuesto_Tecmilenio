const cargarCabecero = () => {
    var presupuesto = totalIngresos() - totalEgresos();
    var porcentajeEgreso = totalEgresos() / totalIngresos();
}

const totalIngresos = ()=> {
    let totalIngresos = 0;
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}

const totalEgresos = () => {
    let totalEgreso = 0;

    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }

    return totalEgreso;
}