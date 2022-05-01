cargar = function() {  

    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let diaSemana = fecha.getDay();
    let mes = fecha.getMonth();
    let year = fecha.getFullYear();
    let sigla = "AM";
    let dia = fecha.getDate();

    if(hora == 0) {
        hora = 12;
    }
    else if (hora > 12) {
        hora = hora - 12;
        sigla = "PM";
    }
    if (diaSemana == 0) {
        diaSemana = "Domingo";

    }else if (diaSemana == 1) {
        diaSemana = "Lunes";
    }
    else if (diaSemana == 2) {
        diaSemana = "Martes";
    }
    else if (diaSemana == 3) {
        diaSemana = "Miercoles";
    }
    else if (diaSemana == 4) {
        diaSemana = "Jueves";
    }
    else if (diaSemana == 5) {
        diaSemana = "Viernes";
    }
    else if (diaSemana == 6) {
        diaSemana = "Sabado";
    }
    if (mes == 0) {
        mes = "Enero";
    }
    else if (mes == 1) {
        mes = "Febrero";
    }
    else if (mes == 2) {
        mes = "Marzo";
    }

    else if (mes == 3) {
        mes = "Abril";
    }
    else if (mes == 4) {
        mes = "Mayo";
    }
    else if (mes == 5) {
        mes = "Junio";
    }
    else if (mes == 6) {
        mes = "Julio";
    }
    else if (mes == 7) {
        mes = "Agosto";
    }
    else if (mes == 8) {
        mes = "Septiembre";
    }
    else if (mes == 9) {
        mes = "Octubre";
    }
    else if (mes == 10) {
        mes = "Noviembre";
    }
    else if (mes == 11) {
        mes = "Diciembre";
    }


    let fechaactual = diaSemana + " " + dia + " " + " de " + mes + " " + "del " + year;
    document.getElementById("fecha").innerHTML = fechaactual;
    let tiempo = hora + ":" + minutos + ":" + segundos + " " + sigla;
    document.getElementById("cotidiana").innerHTML = tiempo;
    setTimeout(cargar, 1000);

}
cargar();