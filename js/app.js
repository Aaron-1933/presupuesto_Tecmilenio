const egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];

const ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000)
];


const cargarCabecero =  () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    console.log("Presupuesto: ", formatoMoneda(presupuesto));
    console.log("Porcentaje: ", formatoPorcentaje(porcentajeEgreso));
    console.log("Ingresos: ", formatoMoneda(totalIngresos()));
    console.log("Egresos: ", formatoMoneda(totalEgresos()));
}

const totalIngresos = () => {
    let totalIngresos = 0;
    for(let ingreso of ingresos) { //lo tuve que cambair a objeto para probar
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}

const totalEgresos = () => {
    let totalEgreso = 0;
    for(let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

const formatoMoneda = (valor) => { 
    return valor.toLocaleString('es-Mx', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2
    });
}


cargarCabecero();