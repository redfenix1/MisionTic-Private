// ***************************
// REPORTS (REPORTS)
// ***************************

// Cantidad de reservas completas vs canceladas.
$(document).ready(function() {
    report();
});

function report(){
    $("#totalCompleted").empty();
    $("#totalCancelled").empty();
    $("#reportTitle").empty();
    $("#reportTitle").append("Cantidad de reservas completas vs canceladas");

    $.ajax({
        url : 'api/Reservation/report-status',
        type : 'GET',
        dataType : 'json',

        success : function(r) {
            $("#totalCompleted").append(r.completed);
            $("#totalCancelled").append(r.cancelled);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });
}