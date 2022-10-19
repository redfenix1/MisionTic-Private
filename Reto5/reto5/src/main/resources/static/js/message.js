// ***************************
// MESSAGE (MENSAJE)
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
            for (let i = 0; i < boxes.length; i++) {
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
            for (let i = 0; i < clients.length; i++) {
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



function getFrontMessageData() {
    let k = {
        idMessage: $("#idMessage").val(),
        box: {
            id: $("#nameBox").val()
        },
        client: {
            idClient: $("#nameClient").val()
        },
        messageText: $("#textMessage").val()
    }
    return k;
}

function buttonsDisplay(save,update,lists){
    if(save==true){
        $("#saveMessage").removeClass("disabled");
    }else{
        $("#saveMessage").addClass("disabled");
    }
    if(update==true){
        $("#updateMessage").removeClass("disabled");
    }else{
        $("#updateMessage").addClass("disabled");
    }
    if(lists==true){
        $("#readMessages").removeClass("disabled");
    }else{
        $("#readMessages").addClass("disabled");
    }
}


function readMessages() {
    $.ajax({
        url: 'api/Message/all',
        type: 'GET',
        dataType: 'json',

        success: function (messages) {
            clearInfoMessages();
            drawMessages(messages);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            // alert('Petición realizada');
        }
    });
}

function drawMessages(items) {
    let myTable = "";
    myTable += "<table class='table table-light table-striped'>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<th>ID</th>";
    myTable += "<th>Palco</th>";
    myTable += "<th>Cliente</th>";
    myTable += "<th>Mensaje</th>";
    myTable += "<th>Actualizar</th>";
    myTable += "<th>Borrar</th>";
    myTable += "</tr>";
    myTable += "</thead>";
    myTable += "<tbody>";
    for (let i = 0; i < items.length; i++) {
        myTable + "<tr>";
        myTable += "<td>" + items[i].idMessage + "</td>";
        myTable += "<td>" + items[i].box.name + "</td>";
        myTable += "<td>" + items[i].client.name + "</td>";
        myTable += "<td>" + items[i].messageText + "</td>";
        myTable+="<td class='align-middle'><button onclick='showMessage("+items[i].idMessage+"); buttonsDisplay(false,true,true);' type='button' class='d-block mx-auto btn btn-warning'><i class='bi bi-pencil '></i></button></td>";
        myTable+="<td class='align-middle'><button onclick='deleteMessage("+items[i].idMessage+"); buttonsDisplay(true,false,true);' type='button' class='d-block mx-auto btn btn-danger'><i class='bi bi-trash'></i></button></td>";
        myTable += "</tr>";
    }
    myTable += "</tbody>";
    myTable += "</table>";

    $("#listMessages").append(myTable);

}

function saveMessage() {
    if($("#nameBox").val()!="" && $("#nameClient").val()!="" && $("#textMessage").val()!="") {
        let data=getFrontMessageData();
        data.idMessage=null;
        let dataToSend = JSON.stringify(data);
        console.log(dataToSend);

        $.ajax({
            url: 'api/Message/save',
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
                clearInfoMessages();
                readMessages();
                buttonsDisplay(true,false,true);
            }
        });
    }

}

function clearInfoMessages() {
    $("#listMessages").empty();
    $("#idMessage").val("");
    $("#nameBox").val("").change();
    $("#nameClient").val("").change();
    $("#textMessage").val("");
}

function updateMessage() {
    if($("#nameBox").val()!="" && $("#nameClient").val()!="" && $("#textMessage").val()!="") {
        let data = getFrontMessageData();
        let dataToSend = JSON.stringify(data);
        console.log(dataToSend);

        $.ajax({
            url: 'api/Message/update',
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
                clearInfoMessages();
                readMessages();
                buttonsDisplay(true, false, true);
            }
        });
    }
}

function deleteMessage(idMessage) {
    let data = {
        idMessage: idMessage
    };

    let dataToSend = JSON.stringify(data);

    $.ajax({
        url: 'api/Message/'+idMessage,
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
            clearInfoMessages();
            readMessages();
            buttonsDisplay(true,false,true);
        }
    });
}

function showMessage(idMessage) {
    $.ajax({
        url: 'api/Message/' + idMessage,
        type: 'GET',
        dataType: 'json',

        success: function (message) {
            // alert('Se ha guardado');
            drawMessage(message);
        },
        error: function (xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete: function (client) {
            // alert('Petición realizada');
        }
    });
}


function drawMessage(item) {
    $("#idMessage").val(item.idMessage);
    $("#nameBox").val(item.box.id).change();
    $("#nameClient").val(item.client.idClient).change();
    $("#textMessage").val(item.messageText);
}