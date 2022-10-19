// ***************************
// CLIENT (CLIENTE)
// ***************************
$(document).ready(function() {
    buttonsDisplay(true,false,true);
});

function getFrontClientData(){
    let k={
        idClient:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        password:$("#passwordClient").val(),
        age:$("#ageClient").val()
    }
    return k;
}

function buttonsDisplay(save,update,lists){
    if(save==true){
        $("#saveClient").removeClass("disabled");
    }else{
        $("#saveClient").addClass("disabled");
    }
    if(update==true){
        $("#updateClient").removeClass("disabled");
    }else{
        $("#updateClient").addClass("disabled");
    }
    if(lists==true){
        $("#readClients").removeClass("disabled");
    }else{
        $("#readClients").addClass("disabled");
    }
}

function readClients(){
    $.ajax({
        url : 'api/Client/all',
        type : 'GET',
        dataType : 'json',

        success : function(clients) {
            console.log(clients);
            clearInfoClients();
            drawClients(clients);
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
                myTable+="<th class='text-center'>Actualizar</th>";
                myTable+="<th class='text-center'>Borrar</th>";
            myTable+="</tr>";
        myTable+="</thead>";
        myTable+="<tbody>";
            for(i=0; i<items.length; i++){
                myTable+"<tr>";
                myTable+="<td>" + items[i].idClient + "</td>";
                myTable+="<td>" + items[i].name + "</td>";
                myTable+="<td>" + items[i].email + "</td>";
                myTable+="<td>" + items[i].age + "</td>";
                myTable+="<td class='align-middle'><button onclick='showClient("+items[i].idClient+"); buttonsDisplay(false,true,true);' type='button' class='d-block mx-auto btn btn-warning'><i class='bi bi-pencil '></i></button></td>";
                myTable+="<td class='align-middle'><button onclick='deleteClient("+items[i].idClient+"); buttonsDisplay(true,false,true);' type='button' class='d-block mx-auto btn btn-danger'><i class='bi bi-trash'></i></button></td>";
                myTable+="</tr>";
            }
        myTable+="</tbody>";
    myTable+="</table>";
    
    $("#listClients").append(myTable);

}

function saveClient(){

    if($("#nameClient").val()!="" && $("#emailClient").val()!="" && $("#passwordClient").val()!="" && $("#ageClient").val()!="") {
        let data = getFrontClientData();
        data.idClient = null;
        let dataToSend = JSON.stringify(data);
        console.log(dataToSend);

        $.ajax({
            url: 'api/Client/save',
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
                clearInfoClients();
                readClients();
                buttonsDisplay(true,false,true);
            }
        });
    }
}

function clearInfoClients(){
    $("#listClients").empty();
    $("#idClient").val("");
    $("#nameClient").val("");
    $("#emailClient").val("");
    $("#passwordClient").val("");
    $("#ageClient").val("");
}

function updateClient(){
    if($("#nameClient").val()!="" && $("#emailClient").val()!="" && $("#passwordClient").val()!="" && $("#ageClient").val()!="") {
        let data = getFrontClientData();
        let dataToSend = JSON.stringify(data);
        console.log(dataToSend);

        $.ajax({
            url : 'api/Client/update',
            type : 'PUT',
            data : dataToSend,
            dataType : 'json',
            contentType : 'application/json',

            success : function(respuesta) {
                //alert('Se ha guardado');
            },
            error : function(xhr, status) {
                //alert('ha sucedido un problema');
            },
            complete : function(xhr, status) {
                //alert('Petición realizada');
                clearInfoClients();
                readClients();
                buttonsDisplay(true, false, true);
            }
        });
    }
}

function deleteClient(idClient){
    let data={
        idClient:idClient
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'api/Client/'+idClient,
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
            buttonsDisplay(true,false,true);
        }
    });
}

function showClient(idClient){
    $.ajax({
        url : 'api/Client/'+idClient,
        type : 'GET',
        dataType : 'json',

        success : function(client) {
            // alert('Se ha guardado');
            drawClient(client);
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
    $("#idClient").val(item.idClient);
    $("#nameClient").val(item.name);
    $("#emailClient").val(item.email);
    $("#passwordClient").val(item.password);
    $("#ageClient").val(item.age);
}
