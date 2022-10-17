// ***************************
// REPORTS (REPORTS)
// ***************************

// Top de los clientes que más dinero le han dejado a la compañía.
$(document).ready(function() {
    report();
});

function report(){
    $("#tableReport").empty();
    $("#reportTitle").empty();
    $("#reportTitle").append("Top de los clientes que más dinero le han dejado a la compañía");
    $.ajax({
        url : 'api/Reservation/report-clients',
        type : 'GET',
        dataType : 'json',

        success : function(r) {
            drawRows(r);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });
}

function drawRows(items){
    let rs ="";
    for(let i=0; i<items.length; i++){
        rs+=`
        <tr>
            <th scope="row">${items[i].client.idClient}</th>
            <td>${items[i].client.name}</td>
            <td>${items[i].total}</td>
        </tr>`;
    }
    $("#tableReport").append(rs);
    console.log(rs);
}