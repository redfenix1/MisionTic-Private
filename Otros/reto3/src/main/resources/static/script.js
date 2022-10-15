function visualizarPalcos() {
    $.ajax({
        url: 'https://144.22.211.103:8080/api/Box/all',
        type: 'GET',
        dataType: 'json',
        success: function (palcos) {
            let ps = palcos.items;
            $("#listaPalcos").empty();
            for (i = 0; i < ps.length; i++) {
                $("#listaPalcos").append(ps[i].id + " <b>" + ps[i].location + "</b> " + ps[i].capacity + " " + ps[i].category_id + " " + ps[i].name);
                $("#listaPalcos").append("<button onclick='borrarPalcos(" + ps[i].id + ")'>Borrar</button><br>");
                
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}


function guardarPalcos() {
    let id = $("#id").val();
    let location = $("#location").val();
    let capacity = $("#capacity").val();
    let category_id = $("#category_id").val();
    let name = $("#name").val();

    let data = {

        'id': id,
        'location': location,
        'capacity': capacity,
        'category_id': category_id,
        'name': name
    };

    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
        type: 'POST',
        //dataType: 'json',//
        data: dataToSend,
        contentType: 'application/json',

        success: function (palcosM) {
            $("#id").val("");
            $("#location").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarPalcos();
        }
    });


}

function editarPalcos() {
    let id = $("#id").val();
    let location = $("#location").val();
    let capacity = $("#capacity").val();
    let category_id = $("#category_id").val();
    let name = $("#name").val();

    let data = {
        id: id,
        location: location,
        capacity: capacity,
        category_id: category_id,
        name: name
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
        type: 'PUT',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (palcosM) {
            $("#id").val("");
            $("#location").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarPalcos();
        }
    });

}

function borrarPalcos(id) {
    let data = {
        id: id
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
        type: 'DELETE',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (palcosM) {
            $("#id").val("");
            $("#location").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarPalcos();
        }
    });

}

function visualizarClientes() {
    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',
        success: function (clientes) {
            let cs = clientes.items;
            $("#listaClientes").empty();
            for (i = 0; i < cs.length; i++) {
                $("#listaClientes").append(cs[i].id + " <b>" + cs[i].name + "</b> " + cs[i].email + " " + cs[i].age);
                $("#listaClientes").append("<button onclick='borrarClientes(" + cs[i].id + ")'>Borrar</button><br>");

            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function guardarClientes() {
    let id = $("#idCliente").val();
    let name = $("#nameCliente").val();
    let email = $("#emailCliente").val();
    let age = $("#ageCliente").val();

    let data = {
        'id': id,
        'name': name,
        'email': email,
        'age': age
    };

    let dataToSend = JSON.stringify(data);

    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        //dataType: 'json',//
        data: dataToSend,
        contentType: 'application/json',

        success: function (clientesp) {
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#emailCliente").val("");
            $("#ageCliente").val("");
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarClientes();
        }
    });


}

function editarClientes() {
    let id = $("#idCliente").val();
    let name = $("#nameCliente").val();
    let email = $("#emailCliente").val();
    let age = $("#ageCliente").val();


    let data = {
        id: id,
        name: name,
        email: email,
        age: age,

    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'PUT',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (clientesp) {
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#emailCliente").val("");
            $("#ageCliente").val("");

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarClientes();
        }
    });

}
function borrarClientes(id) {
    let data = {
        id: id
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'DELETE',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (palcosM) {
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#emailCliente").val("");
            $("#ageCliente").val("");

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarClientes();
        }
    });

}

function visualizarMensajes() {
    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        dataType: 'json',
        success: function (mensajes) {
            let ms = mensajes.items;
            $("#listaMensajes").empty();
            for (i = 0; i < ms.length; i++) {
                $("#listaMensajes").append(ms[i].id + " <b>" + ms[i].messagetext);
                $("#listaMensajes").append("<button onclick='borrarMensajes(" + ms[i].id + ")'>Borrar</button><br>");

            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function guardarMensajes() {
    let id = $("#idmessage").val();
    let messagetext = $("#messagetext").val();


    let data = {

        id: id,
        messagetext: messagetext,

    };

    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'POST',
        //dataType: 'json',//
        data: dataToSend,
        contentType: 'application/json',

        success: function (mensajesc) {
            $("#idmessage").val("");
            $("#messagetext").val("");

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarMensajes();
        }
    });


}

function editarMensajes() {
    let id = $("#idmessage").val();
    let messagetext = $("#messagetext").val();


    let data = {
        id: id,
        messagetext: messagetext,

    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'PUT',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (mensajesc) {
            $("#idmessage").val("");
            $("#messagetext").val("");
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarMensajes();
        }
    });

}

function borrarMensajes(id) {
    let data = {
        id: id
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: 'https://gebd5ae3c8cc881-reto1ciclo3.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'DELETE',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (mensajesc) {
            $("#idmessage").val("");
            $("#messagetext").val("");
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarMensajes();
        }
    });

}