// ***************************
// CATEGORY (CATEGORIA)
// ***************************
$(document).ready(function() {
    buttonsDisplay(true,false,true);
});

function buttonsDisplay(save,update,lists){
    if(save==true){
        $("#saveCategory").removeClass("disabled");
    }else{
        $("#saveCategory").addClass("disabled");
    }
    if(update==true){
        $("#updateCategory").removeClass("disabled");
    }else{
        $("#updateCategory").addClass("disabled");
    }
    if(lists==true){
        $("#readCategories").removeClass("disabled");
    }else{
        $("#readCategories").addClass("disabled");
    }
}

function readCategories(){
    $.ajax({
        url : 'api/Category/all',
        type : 'GET',
        dataType : 'json',

        success : function(categories) {
            // alert('Success');
            clearInfoCategories();
            drawCategories(categories);
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
    myTable+="<th>Nombre</th>";
    myTable+="<th class='text-center'>Actualizar</th>";
    myTable+="<th class='text-center'>Borrar</th>";
    myTable+="</tr>";
    myTable+="</thead>";
    myTable+="<tbody>";
    for(i=0; i<items.length; i++){
        myTable+"<tr>";
        myTable+="<td>" + items[i].id + "</td>";
        myTable+="<td>" + items[i].name + "</td>";
        myTable+="<td><button onclick='showCategory("+items[i].id+"); buttonsDisplay(false,true,true);' type='button' class='d-block mx-auto btn btn-warning'><i class='bi bi-pencil '></i></button></td>";
        myTable+="<td><button onclick='deleteCategory("+items[i].id+"); buttonsDisplay(true,false,true);' type='button' class='d-block mx-auto btn btn-danger'><i class='bi bi-trash'></i></button></td>";
        myTable+="</tr>";
    }
    myTable+="</tbody>";
    myTable+="</table>";

    $("#listCategories").append(myTable);

}

function saveCategory(){
    if($("#nameCategory").val()!=""){
        let data={
            id:$("#idCategory").val(),
            name:$("#nameCategory").val(),
            description:$("#descriptionCategory").val()
        };

        let dataToSend=JSON.stringify(data);
        console.log(dataToSend);

        $.ajax({
            url : 'api/Category/save',
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
                buttonsDisplay(true,false,true);
                readCategories();
            }
        });
    }
}

function clearInfoCategories(){
    $("#listCategories").empty();
    $("#idCategory").val("");
    $("#nameCategory").val("");
    $("#descriptionCategory").val("");
}

function updateCategory(){
    let data={
        id:$("#idCategory").val(),
        name:$("#nameCategory").val(),
        description:$("#descriptionCategory").val(),
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'api/Category/update',
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
            buttonsDisplay(true,false,true);
        }
    });

}

function deleteCategory(idCategory){
    let data={
        id:idCategory
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'api/Category/'+idCategory,
        type : 'DELETE',
        data : dataToSend,
        dataType : 'json',
        contentType : 'application/json',

        success : function(respuesta) {
            //alert('Success');
        },
        error : function(xhr, status) {
            // alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //alert('Complete');
            clearInfoCategories();
            readCategories();
            buttonsDisplay(true,false,true);
        }
    });
}

function showCategory(idCategory){
    $.ajax({
        url : 'api/Category/'+idCategory,
        type : 'GET',
        dataType : 'json',

        success : function(category) {
            // alert('Se ha guardado');
            drawCategory(category);
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
    $("#idCategory").val(item.id);
    $("#nameCategory").val(item.name);
    $("#descriptionCategory").val(item.description);
}