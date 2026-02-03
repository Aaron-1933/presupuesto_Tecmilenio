let egresos = {
    Renta: 900,
    Ropa: 400
};

let ingresos = {
    Quincena: 9000,
    Venta: 400
};


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
    for(let ingreso of Object.values(ingresos)) { //lo tuve que cambair a objeto para probar
        totalIngresos += ingreso;
    }
    return totalIngresos;
}

const totalEgresos = () => {
    let totalEgreso = 0;
    for(let egreso of Object.values(egresos)) {
        totalEgreso += egreso; //x2
    }

    return totalEgreso;
}

const formatoMoneda = (valor) => { 
    return valor.toLocaleString('es-Mx', {
        style: 'currency',
        currency: 'MXN',
        minimunFractionDigits: 2
    });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2
    });
}


cargarCabecero();