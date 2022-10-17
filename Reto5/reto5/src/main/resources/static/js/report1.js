// ***************************
// REPORTS (REPORTS)
// ***************************

// Cantidad de reservas en un tiempo determinado
$(document).ready(function() {
    $("#reportTitle").empty();
    $("#reportTitle").append("Cantidad de reservas en un tiempo determinado");
});


function report(){
    let dateOne = new Date($("#dateIni").val());
    let dateTwo = new Date($("#dateEnd").val());

    let dateOneStr = dateOne.toLocaleDateString('fr-CA');
    let dateTwoStr = dateTwo.toLocaleDateString('fr-CA');

    if(Date.parse(dateOneStr) < Date.parse(dateTwoStr)){
        $.ajax({
            url : 'api/Reservation/report-dates/'+dateOneStr+'/'+dateTwoStr,
            type : 'GET',
            dataType : 'json',
    
            success : function(r) {
                $("#cardReport").empty();
                $("#divisor").removeClass("d-none");
                let cr = `
                    <div class="shadow card">
                        <div class="card-header display-4 text-center">${r.length}</div>
                        <div class="card-body">
                            <h5 class="card-title text-center">Conteo de reservas</h5>
                            <p class="card-text">Conteo de reservas de ${dateOne.toLocaleDateString('es-CO')} hasta ${dateTwo.toLocaleDateString('es-CO')}</p>
                        </div>
                    </div>
                `;
                $("#cardReport").append(cr);
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        });
    }
}


function format(inputDate) {
    let day, month, year;
  
    day = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();
  
      day = day
          .toString()
          .padStart(2, '0');
  
      month = month
          .toString()
          .padStart(2, '0');
  
    return `${year}/${month}/${day}`;
}