// ***************************
// BOX (PALCO)
// ***************************

$(document).ready(function() {
    getCategoryList();
    buttonsDisplay(true,false,true);
});

function getCategoryList(){
  return $.ajax({
        url : 'api/Category/all',
        type : 'GET',
        dataType : 'json',

        success : function(categories) {
            // alert('Success');
            $("#categoryBox").empty();
            $("#categoryBox").append("<option value=''>Seleccione una categoría</option>");
            for(i=0; i<categories.length; i++){
                let s = `
                    <option value="${categories[i].id}">${categories[i].name}</option>
                `;
                $("#categoryBox").append(s);
            }
        },
        error : function(xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });
}

function getFrontBoxData(){
    let k={
        id:$("#idBox").val(),
        name:$("#nameBox").val(),
        location:$("#locationBox").val(),
        capacity:$("#capacityBox").val(),
        description:$("#descriptionBox").val(),
        category:{
            id:$("#categoryBox").val()
        }
    }
    return k;
}

function buttonsDisplay(save,update,lists){
    if(save==true){
        $("#saveBox").removeClass("disabled");
    }else{
        $("#saveBox").addClass("disabled");
    }
    if(update==true){
        $("#updateBox").removeClass("disabled");
    }else{
        $("#updateBox").addClass("disabled");
    }
    if(lists==true){
        $("#readBoxes").removeClass("disabled");
    }else{
        $("#readBoxes").addClass("disabled");
    }
}

function readBoxes(){
    $.ajax({
        url : 'api/Box/all',
        type : 'GET',
        dataType : 'json',

        success : function(boxes) {
            console.log(boxes);
            clearInfoBoxes();
            drawBoxes(boxes);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });
}

function drawBoxes(items){
    let myTable="";
    myTable+="<table class='table table-light table-striped'>";
    myTable+="<thead>";
    myTable+="<tr>";
    myTable+="<th>ID</th>";
    myTable+="<th>Ubicación</th>";
    myTable+="<th>Capacidad</th>";
    myTable+="<th>Categoría</th>";
    myTable+="<th>Nombre</th>";
    myTable+="<th class='text-center'>Actualizar</th>";
    myTable+="<th class='text-center'>Borrar</th>";
    myTable+="</tr>";
    myTable+="</thead>";
    myTable+="<tbody>";
    for(let i=0; i<items.length; i++){
        myTable+"<tr>";
        myTable+="<td>" + items[i].id + "</td>";
        myTable+="<td>" + items[i].location + "</td>";
        myTable+="<td>" + items[i].capacity + "</td>";
        myTable+="<td>" + items[i].category.name + "</td>";
        myTable+="<td>" + items[i].name + "</td>";
        myTable+="<td class='align-middle'><button onclick='showBox("+items[i].id+"); buttonsDisplay(false,true,true);' type='button' class='d-block mx-auto btn btn-warning'><i class='bi bi-pencil '></i></button></td>";
        myTable+="<td class='align-middle'><button onclick='deleteBox("+items[i].id+"); buttonsDisplay(true,false,true);' type='button' class='d-block mx-auto btn btn-danger'><i class='bi bi-trash'></i></button></td>";
        myTable+="</tr>"
    }
    myTable+="</tbody>";
    myTable+="</table>";

    $("#listBoxes").append(myTable);

}

function saveBox(){
    if($("#nameBox").val()!="" && $("#locationBox").val()!="" && $("#capacityBox").val()!="" && $("#categoryBox").val()!="") {

        let data=getFrontBoxData();
        data.id=null;
        let dataToSend = JSON.stringify(data);
        console.log(dataToSend);

        $.ajax({
            url: 'api/Box/save',
            type: 'POST',
            data: dataToSend,
            dataType: 'json',
            contentType: 'application/json',

            success: function (respuesta) {
                // alert('Se ha guardado');
                clearInfoBoxes();
                readBoxes();
                buttonsDisplay(true,false,true);
            },
            error: function (xhr, status) {
                // alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                // alert('Petición realizada');

            }
        });
    }
}

function clearInfoBoxes(){
    $("#listBoxes").empty();
    $("#idBox").val("");
    $("#nameBox").val("");
    $("#locationBox").val("");
    $("#capacityBox").val("");
    $("#descriptionBox").val("");
    $("#categoryBox").val("").change();
}

function updateBox(){
    if($("#nameBox").val()!="" && $("#locationBox").val()!="" && $("#capacityBox").val()!="" && $("#categoryBox").val()!="") {

        let data = getFrontBoxData();
        let dataToSend = JSON.stringify(data);
        console.log(dataToSend);

        $.ajax({
            url: 'api/Box/update',
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
                clearInfoBoxes();
                readBoxes();
                buttonsDisplay(true, false, true);
            }
        });
    }
}

function deleteBox(idBox){
    let data={
        id:idBox
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'api/Box/'+idBox,
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
            clearInfoBoxes();
            readBoxes();
            buttonsDisplay(true,false,true);
        }
    });
}

function showBox(idBox){
    $.ajax({
        url : 'api/Box/'+idBox,
        type : 'GET',
        dataType : 'json',

        success : function(box) {
            //alert('Se ha guardado');
            drawBox(box);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(client) {
            //alert('Petición realizada');
        }
    });
}

function drawBox(item){
    $("#idBox").val(item.id);
    $("#nameBox").val(item.name);
    $("#locationBox").val(item.location);
    $("#capacityBox").val(item.capacity);
    $("#categoryBox").val(item.category.id).change();
    $("#descriptionBox").val(item.description);
}