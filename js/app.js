const egresos = [];

const ingresos = [];

const cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalIngresos() === 0 ? 0 : totalEgresos() / totalIngresos();

  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);

  document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);

  document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());

  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const totalIngresos = () => {
  let totalIngresos = 0;
  for (let ingreso of ingresos) {
    totalIngresos += ingreso.valor;
  }
  return totalIngresos;
};

const totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-Mx", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

function cargarApp() {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
}

const cargarIngresos = () => {
  let ingresosHtml = "";

  for (let ingreso of ingresos) {
    ingresosHtml += crearIngresoHTML(ingreso);
  }

  document.getElementById("lista-ingresos").innerHTML = ingresosHtml;
};

const cargarEgresos = () => {
  let egresosHTML = "";

  for (let egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }

  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  let ingresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">
        <p>${ingreso.descripcion}</p>
      </div>

      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">
          <p>${formatoMoneda(ingreso.valor)}</p>
        </div>

        <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
            <ion-icon
              name="close-circle-outline"
              onclick="eliminarIngreso(${ingreso.id})">
            </ion-icon>
          </button>
        </div>
      </div>
    </div>
  `;
  return ingresoHTML;
};

const crearEgresoHTML = (egreso) => {
  let porcentajeEgreso = egreso.valor / totalIngresos();
  let egresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">
        <p>${egreso.descripcion}</p>
      </div>

      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">
          <p>${formatoMoneda(egreso.valor)}</p>
        </div>
        
      <div class="elemento_porcentaje">
          <p>${formatoPorcentaje(porcentajeEgreso)}</p>
        </div>

        <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
            <ion-icon
              name="close-circle-outline"
              onclick="eliminarEgreso(${egreso.id})">
            </ion-icon>
          </button>
        </div>
      </div>
    </div>
  `;
  return egresoHTML;
};

const eliminarEgreso = (id) => {
  let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);

  egresos.splice(indiceEliminar, 1);

  cargarCabecero();
  cargarEgresos();
};

const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);

  ingresos.splice(indiceEliminar, 1);

  cargarCabecero();
  cargarIngresos();
};

const agregarDato = () => {
  let forma = document.getElementById("forma");
  let tipo = forma["tipo"].value;
  let descripcion = forma["descripcion"].value;
  let valor = forma["valor"].value;

  if (descripcion !== "" && valor !== "") {
    if (tipo === "ingreso") {
      ingresos.push(new Ingreso(descripcion, Number(valor)));
      cargarCabecero();
      cargarIngresos();
    } else if (tipo === "egreso") { //esto no estaba pero lo puse
      egresos.push(new Egreso(descripcion, Number(valor)));
      cargarCabecero();
      cargarEgresos();
    }

     //esto no viene en la presentacion (lo hice para limpiar el formulario al registrar un movimiento)
    forma["descripcion"].value = "";
    forma["valor"].value = "";
    forma["descripcion"].focus();
  }
};
// cargarCabecero();
