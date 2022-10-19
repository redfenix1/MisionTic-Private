// ***************************
// RESERVATION (RESERVACIÓN)
// ***************************

$(document).ready(function () {
    getBoxList();
    getClientList();
    buttonsDisplay(true, false, true);
});

function getBoxList() {
    $.ajax({
        url: 'api/Box/all',
        type: 'GET',
        dataType: 'json',

        success: function (boxes) {
            // alert('Success');
            $("#nameBox").empty();
            $("#nameBox").append("<option value=''>Seleccione un palco</option>");
            for (i = 0; i < boxes.length; i++) {
                let s = `
                      <option value="${boxes[i].id}">${boxes[i].name}</option>
                  `;
                $("#nameBox").append(s);
            }
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            // alert('Petición realizada');
        }
    });
}


function getClientList() {
    $.ajax({
        url: 'api/Client/all',
        type: 'GET',
        dataType: 'json',

        success: function (clients) {
            // alert('Success');
            $("#nameClient").empty();
            $("#nameClient").append("<option value=''>Seleccione un cliente</option>");
            for (i = 0; i < clients.length; i++) {
                let s = `
                      <option value="${clients[i].idClient}">${clients[i].name}</option>
                  `;
                $("#nameClient").append(s);
            }
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            // alert('Petición realizada');
        }
    });
}

function getFrontReservationData() {
    let k = {
        idReservation: $("#idReservation").val(),
        box: {
            id: $("#nameBox").val()
        },
        client: {
            idClient: $("#nameClient").val()
        },
        // startDate: $("#startDateReservation").val(),
        // devolutionDate: $("#devolutionDateReservation").val(),
        // status: "created",
        // score: null
    }
    return k;
}

function buttonsDisplay(save,update,lists){
    if(save==true){
        $("#saveReservation").removeClass("disabled");
        //$("#startDateReservation").attr('disabled', true);
        //$("#textReservation").removeAttr("disabled");
    }else{
        $("#saveReservation").addClass("disabled");
    }
    if(update==true){
        $("#updateReservation").removeClass("disabled");
        $("#startDateReservation").removeAttr("disabled");
        $("#devolutionDateReservation").removeAttr("disabled");
        $("#statusReservation").removeAttr("disabled");
    }else{
        $("#updateReservation").addClass("disabled");
    }
    if(lists==true){
        $("#readReservations").removeClass("disabled");
    }else{
        $("#readReservations").addClass("disabled");
    }
}


function readReservations() {
    $.ajax({
        url: 'api/Reservation/all',
        type: 'GET',
        dataType: 'json',

        success: function (reservation) {
            console.log(reservation);

            console.log($("#startDateReservation").val());
            clearInfoReservations();
            drawReservations(reservation);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            // alert('Petición realizada');
        }
    });
}

function drawReservations(items) {
    let myTable = "";
    myTable += "<table class='table table-light table-striped'>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<th>ID</th>";
    myTable += "<th>Palco</th>";
    myTable += "<th>Cliente</th>";
    myTable += "<th>Fecha de inicio</th>";
    myTable += "<th>Fecha de entrega</th>";
    myTable += "<th>Estado</th>";
    myTable += "<th>Actualizar</th>";
    myTable += "<th>Borrar</th>";
    myTable += "</tr>";
    myTable += "</thead>";
    myTable += "<tbody>";
    for (i = 0; i < items.length; i++) {
        console.log(typeof new Date((items[i].startDate).substring(0,10)+' GMT-0500') + "" + new Date((items[i].startDate).substring(0,10)+' GMT-0500'));
        const diaUno = items[i].startDate===null ? "" : formatDate(new Date((items[i].startDate).substring(0,10)+' GMT-0500'));
        const diaDos = items[i].devolutionDate===null ? "" : formatDate(new Date((items[i].devolutionDate).substring(0,10)+' GMT-0500'));
        myTable += "<tr>";
        myTable += "<td>" + items[i].idReservation + "</td>";
        myTable += "<td>" + items[i].box.name + "</td>";
        myTable += "<td>" + items[i].client.name + "</td>";
        myTable += "<td>" + diaUno + "</td>";
        myTable += "<td>" + diaDos + "</td>";
        myTable += "<td>" + items[i].status + "</td>";
        myTable+="<td class='align-middle'><button onclick='showReservation("+items[i].idReservation+"); buttonsDisplay(false,true,true);' type='button' class='d-block mx-auto btn btn-warning'><i class='bi bi-pencil '></i></button></td>";
        myTable+="<td class='align-middle'><button onclick='deleteReservation("+items[i].idReservation+"); buttonsDisplay(true,false,true);' type='button' class='d-block mx-auto btn btn-danger'><i class='bi bi-trash'></i></button></td>";
        myTable += "</tr>";
    }
    myTable += "</tbody>";
    myTable += "</table>";

    $("#listReservations").append(myTable);

}

function saveReservation() {
    if($("#nameBox").val()!="" && $("#nameClient").val()!="") {
        
        //let startDate = format(new Date($("#startDateReservation").val()));
        //console.log(startDate);

        let data=getFrontReservationData();
        data.idReservation=null;
        data.startDate=formatDate(new Date());
        data.status="created";
        let dataToSend = JSON.stringify(data);
        console.log(dataToSend);

        $.ajax({
            url: 'api/Reservation/save',
            type: 'POST',
            data: dataToSend,
            dataType: 'json',
            contentType: 'application/json',

            success: function (respuesta) {
                // alert('Se ha guardado');
            },
            error: function (xhr, status) {
                // alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                // alert('Petición realizada');
                clearInfoReservations();
                readReservations();
                buttonsDisplay(true,false,true);
            }
        });
    }
}

function clearInfoReservations() {
    $("#listReservations").empty();
    $("#idReservation").val("");
    $("#nameBox").val("").change();
    $("#nameClient").val("").change();
    $("#startDateReservation").val("");
    $("#devolutionDateReservation").val("");
    $("#statusReservation").val("").change();
    $("#textReservation").val("");
}

function updateReservation() {
    if($("#nameBox").val()!="" && $("#nameClient").val()!="" && $("#startDateReservation").val()!="" && $("#statusReservation").val()!="") {

        let startDate = new Date($("#startDateReservation").val()+' GMT-0500');
        let devolDate = new Date($("#devolutionDateReservation").val()+' GMT-0500');

        let data = getFrontReservationData();
        data.startDate=formatDate(startDate);
        data.devolutionDate= formatDate(devolDate);
        data.status=$("#statusReservation").val();
        let dataToSend = JSON.stringify(data);
        console.log(dataToSend);

        $.ajax({
            url: 'api/Reservation/update',
            type: 'PUT',
            data: dataToSend,
            dataType: 'json',
            contentType: 'application/json',

            success: function (respuesta) {
                // alert('Se ha guardado');
            },
            error: function (xhr, status) {
                // alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                // alert('Petición realizada');
                clearInfoReservations();
                readReservations();
                buttonsDisplay(true, false, true);
            }
        });
    }
}

function deleteReservation(idReservation) {
    let data = {
        idReservation: idReservation
    };

    let dataToSend = JSON.stringify(data);

    $.ajax({
        url: 'api/Reservation/'+idReservation,
        type: 'DELETE',
        data: dataToSend,
        dataType: 'json',
        contentType: 'application/json',

        success: function (respuesta) {
            // alert('Se ha guardado');
        },
        error: function (xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            // alert('Petición realizada');
            clearInfoReservations();
            readReservations();
            buttonsDisplay(true,false,true);
        }
    });
}

function showReservation(idReservation) {
    $.ajax({
        url: 'api/Reservation/' + idReservation,
        type: 'GET',
        dataType: 'json',

        success: function (reservation) {
            // alert('Se ha guardado');
            drawReservation(reservation);
        },
        error: function (xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete: function (client) {
            // alert('Petición realizada');
        }
    });
}


function drawReservation(item) {
    const diaUno = item.startDate===null ? "" : formatDate(new Date((item.startDate).substring(0,10)+' GMT-0500'));
    const diaDos = item.devolutionDate===null ? "" : formatDate(new Date((item.devolutionDate).substring(0,10)+' GMT-0500'));

    $("#idReservation").val(item.idReservation);
    $("#nameBox").val(item.box.id).change();
    $("#nameClient").val(item.client.idClient).change();
    $("#startDateReservation").val(diaUno);
    $("#devolutionDateReservation").val(diaDos);
    $("#textReservation").val(item.reservationText);
    $("#statusReservation").val(item.status).change();
}


function formatDate(inputDate) {
    let day, month, year;
  
    day = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();
  
      day = day
          .toString()
          .padStart(2, '0');
  
      month = month
          .toString()
          .padStart(2, '0');
  
    return `${year}-${month}-${day}`;
}