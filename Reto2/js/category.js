// ***************************
// CATEGORY (CAYEGORIA)
// ***************************

function readCategories(){
    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/category/category',
        type : 'GET',
        dataType : 'json',

        success : function(categories) {
            clearInfoCategories();
            drawCategories(categories.items);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });
}

function drawCategories(items){
    let myTable="";
    myTable+="<table class='table table-light table-striped'>";
    myTable+="<thead>";
    myTable+="<tr>";
    myTable+="<th>ID</th>";
    myTable+="<th>Descripción</th>";
    myTable+="<th>Actualizar</th>";
    myTable+="<th>Borrar</th>";
    myTable+="</tr>";
    myTable+="</thead>";
    myTable+="<tbody>";
    for(i=0; i<items.length; i++){
        myTable+"<tr>";
        myTable+="<td>" + items[i].id + "</td>";
        myTable+="<td>" + items[i].description + "</td>";
        myTable+="<td><button onclick='showCategory("+items[i].id+")' type='button' class='btn btn-warning'>Mostrar</button></td>";
        myTable+="<td><button onclick='deleteCategory("+items[i].id+")' type='button' class='btn btn-danger'>Borrar</button></td>";
        myTable+="</tr>"
    }
    myTable+="</tbody>";
    myTable+="</table>";

    $("#listCategories").append(myTable);

}

function saveCategory(){
    let data={
        id:$("#idCategory").val(),
        description:$("#descriptionCategory").val()
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/category/category',
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
            clearInfoCategories();
            readCategories();
        }
    });

}

function clearInfoCategories(){
    $("#listCategories").empty();
    $("#idCategory").val("");
    $("#descriptionCategory").val("");
}

function updateCategory(){
    let data={
        id:$("#idCategory").val(),
        description:$("#descriptionCategory").val(),
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/category/category',
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
            clearInfoCategories();
            readCategories();
        }
    });

}

function deleteCategory(idCategory){
    let data={
        id:idCategory
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/category/category',
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
            clearInfoCategories();
            readCategories();
        }
    });
}

function showCategory(idCategory){
    $.ajax({
        url : 'https://g7f833d2f704b66-pxuhq3fauuoh0wdc.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/category/category/'+idCategory,
        type : 'GET',
        dataType : 'json',

        success : function(category) {
            // alert('Se ha guardado');
            drawCategory(category.items);
        },
        error : function(xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete : function(client) {
            // alert('Petición realizada');
        }
    });
}


function drawCategory(item){
    for(i=0; i<item.length; i++){
        $("#idCategory").val(item[i].id);
        $("#descriptionCategory").val(item[i].description);
    }
}