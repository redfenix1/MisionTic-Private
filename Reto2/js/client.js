// ***************************
// CLIENT (CLIENTE)
// ***************************

function readClients(){
    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'GET',
        dataType : 'json',

        success : function(clients) {
            clearInfoClients();
            drawClients(clients.items);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });
}

function drawClients(items){
    let myTable="";
    myTable+="<table class='table table-light table-striped'>";
        myTable+="<thead>";
            myTable+="<tr>";
                myTable+="<th>ID</th>";
                myTable+="<th>Nombre</th>";
                myTable+="<th>Correo</th>";
                myTable+="<th>Edad</th>";
                myTable+="<th>Actualizar</th>";
                myTable+="<th>Borrar</th>";
            myTable+="</tr>";
        myTable+="</thead>";
        myTable+="<tbody>";
            for(i=0; i<items.length; i++){
                myTable+"<tr>";
                myTable+="<td>" + items[i].id + "</td>";
                myTable+="<td>" + items[i].name + "</td>";
                myTable+="<td>" + items[i].email + "</td>";
                myTable+="<td>" + items[i].age + "</td>";
                myTable+="<td><button onclick='showClient("+items[i].id+")' type='button' class='btn btn-warning'>Mostrar</button></td>";
                myTable+="<td><button onclick='deleteClient("+items[i].id+")' type='button' class='btn btn-danger'>Borrar</button></td>";
                myTable+="</tr>"
            }
        myTable+="</tbody>";
    myTable+="</table>";
    
    $("#listClients").append(myTable);

}

function saveClient(){
    let jsIdClient=$("#idClient").val();
    let jsNameClient=$("#nameClient").val();
    let jsEmailClient=$("#mailClient").val();
    let jsAgeClient=$("#ageClient").val();

    let data={
        // id:$("#idClient").val();
        id:jsIdClient,
        // name:$("#nameClient").val();
        name:jsNameClient,
        // email:$("#mailClient").val();
        email:jsEmailClient,
        // age:$("#ageClient").val();
        age:jsAgeClient
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
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
            clearInfoClients();
            readClients();
        }
    });

}

function clearInfoClients(){
    $("#listClients").empty();
    $("#idClient").val("");
    $("#nameClient").val("");
    $("#mailClient").val("");
    $("#ageClient").val("");
}

function updateClient(){
    let jsIdClient=$("#idClient").val();
    let jsNameClient=$("#nameClient").val();
    let jsEmailClient=$("#mailClient").val();
    let jsAgeClient=$("#ageClient").val();

    let data={
        // id:$("#idClient").val();
        id:jsIdClient,
        // name:$("#nameClient").val();
        name:jsNameClient,
        // email:$("#mailClient").val();
        email:jsEmailClient,
        // age:$("#ageClient").val();
        age:jsAgeClient
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
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
            clearInfoClients();
            readClients();
        }
    });

}

function deleteClient(idClient){
    let data={
        id:idClient
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
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
            clearInfoClients();
            readClients();
        }
    });
}

function showClient(idClient){
    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/'+idClient,
        type : 'GET',
        dataType : 'json',

        success : function(client) {
            // alert('Se ha guardado');
            drawClient(client.items);
        },
        error : function(xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete : function(client) {
            // alert('Petición realizada');
        }
    });
}


function drawClient(item){
    for(i=0; i<item.length; i++){
        $("#idClient").val(item[i].id);
        $("#nameClient").val(item[i].name);
        $("#mailClient").val(item[i].email);
        $("#ageClient").val(item[i].age);
    }
}
