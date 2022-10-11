// ***************************
// MESSAGE (MENSAJE)
// ***************************

function readMessages(){
    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'GET',
        dataType : 'json',

        success : function(messages) {
            clearInfoMessages();
            drawMessages(messages.items);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });
}

function drawMessages(items){
    let myTable="";
    myTable+="<table class='table table-light table-striped'>";
    myTable+="<thead>";
    myTable+="<tr>";
    myTable+="<th>ID</th>";
    myTable+="<th>Mensaje</th>";
    myTable+="<th>Actualizar</th>";
    myTable+="<th>Borrar</th>";
    myTable+="</tr>";
    myTable+="</thead>";
    myTable+="<tbody>";
    for(i=0; i<items.length; i++){
        myTable+"<tr>";
        myTable+="<td>" + items[i].id + "</td>";
        myTable+="<td>" + items[i].messagetext + "</td>";
        myTable+="<td><button onclick='showMessage("+items[i].id+")' type='button' class='btn btn-warning'>Mostrar</button></td>";
        myTable+="<td><button onclick='deleteMessage("+items[i].id+")' type='button' class='btn btn-danger'>Borrar</button></td>";
        myTable+="</tr>"
    }
    myTable+="</tbody>";
    myTable+="</table>";

    $("#listMessages").append(myTable);

}

function saveMessage(){
    let data={
        id:$("#idMessage").val(),
        messagetext:$("#textMessage").val()
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'POST',
        data : dataToSend,
        dataType : 'json',
        contentType : 'application/json',

        success : function(respuesta) {
            // alert('Se ha guardado');
        },
        error : function(xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
            clearInfoMessages();
            readMessages();
        }
    });

}

function clearInfoMessages(){
    $("#listMessages").empty();
    $("#idMessage").val("");
    $("#textMessage").val("");
}

function updateMessage(){
    let data={
        id:$("#idMessage").val(),
        messagetext:$("#textMessage").val(),
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'PUT',
        data : dataToSend,
        dataType : 'json',
        contentType : 'application/json',

        success : function(respuesta) {
            // alert('Se ha guardado');
        },
        error : function(xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
            clearInfoMessages();
            readMessages();
        }
    });

}

function deleteMessage(idMessage){
    let data={
        id:idMessage
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'DELETE',
        data : dataToSend,
        dataType : 'json',
        contentType : 'application/json',

        success : function(respuesta) {
            // alert('Se ha guardado');
        },
        error : function(xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
            clearInfoMessages();
            readMessages();
        }
    });
}

function showMessage(idMessage){
    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/'+idMessage,
        type : 'GET',
        dataType : 'json',

        success : function(message) {
            // alert('Se ha guardado');
            drawMessage(message.items);
        },
        error : function(xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete : function(client) {
            // alert('Petición realizada');
        }
    });
}


function drawMessage(item){
    for(i=0; i<item.length; i++){
        $("#idMessage").val(item[i].id);
        $("#textMessage").val(item[i].messagetext);
    }
}