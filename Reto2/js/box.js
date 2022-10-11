// ***************************
// BOX (PALCO)
// ***************************

function readBoxs(){
    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
        type : 'GET',
        dataType : 'json',

        success : function(boxs) {
            clearInfoBoxs();
            drawBoxs(boxs.items);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });
}

function drawBoxs(items){
    let myTable="";
    myTable+="<table class='table table-light table-striped'>";
    myTable+="<thead>";
    myTable+="<tr>";
    myTable+="<th>ID</th>";
    myTable+="<th>Ubicación</th>";
    myTable+="<th>Capacidad</th>";
    myTable+="<th>Categoría</th>";
    myTable+="<th>Nombre</th>";
    myTable+="<th>Actualizar</th>";
    myTable+="<th>Borrar</th>";
    myTable+="</tr>";
    myTable+="</thead>";
    myTable+="<tbody>";
    for(i=0; i<items.length; i++){
        myTable+"<tr>";
        myTable+="<td>" + items[i].id + "</td>";
        myTable+="<td>" + items[i].location + "</td>";
        myTable+="<td>" + items[i].capacity + "</td>";
        myTable+="<td>" + items[i].category_id + "</td>";
        myTable+="<td>" + items[i].name + "</td>";
        myTable+="<td><button onclick='showBox("+items[i].id+")' type='button' class='btn btn-warning'>Mostrar</button></td>";
        myTable+="<td><button onclick='deleteBox("+items[i].id+")' type='button' class='btn btn-danger'>Borrar</button></td>";
        myTable+="</tr>"
    }
    myTable+="</tbody>";
    myTable+="</table>";

    $("#listBoxs").append(myTable);

}

function saveBox(){
    let data={
        id:$("#idBox").val(),
        location:$("#locationBox").val(),
        capacity:$("#capacityBox").val(),
        category_id:$("#category_idBox").val(),
        name:$("#nameBox").val()
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
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
            clearInfoBoxs();
            readBoxs();
        }
    });

}

function clearInfoBoxs(){
    $("#listBoxs").empty();
    $("#idBox").val("");
    $("#locationBox").val("");
    $("#capacityBox").val("");
    $("#category_idBox").val("");
    $("#nameBox").val("");
}

function updateBox(){
    let data={
        id:$("#idBox").val(),
        location:$("#locationBox").val(),
        capacity:$("#capacityBox").val(),
        category_id:$("#category_idBox").val(),
        name:$("#nameBox").val()
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
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
            clearInfoBoxs();
            readBoxs();
        }
    });

}

function deleteBox(idBox){
    let data={
        id:idBox
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
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
            clearInfoBoxs();
            readBoxs();
        }
    });
}

function showBox(idBox){
    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box/'+idBox,
        type : 'GET',
        dataType : 'json',

        success : function(box) {
            // alert('Se ha guardado');
            drawBox(box.items);
        },
        error : function(xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete : function(client) {
            // alert('Petición realizada');
        }
    });
}


function drawBox(item){
    for(i=0; i<item.length; i++){
        $("#idBox").val(item[i].id);
        $("#locationBox").val(item[i].location);
        $("#capacityBox").val(item[i].capacity);
        $("#category_idBox").val(item[i].category_id);
        $("#nameBox").val(item[i].name);
    }
}