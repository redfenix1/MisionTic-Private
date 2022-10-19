// ***************************
// REPORTS (REPORTS)
// ***************************

// Cantidad de reservas en un tiempo determinado
$(document).ready(function() {
    $("#reportTitle").empty();
    $("#reportTitle").append("Cantidad de reservas en un tiempo determinado");
});


function report(){
    // $("#dateIni").val()  Retorna un string "yyyy-mm-dd" Ejemplo 2020-12-31
    // toca añadirle la zona horaria de Colombia para este caso
    // new Date() siempre crea en zona horaria UTC
    let dateOne = new Date($("#dateIni").val()+' GMT-0500');
    let dateTwo = new Date($("#dateEnd").val()+' GMT-0500');

    //let dateOneStr = formatDate(dateOne);
    //let dateTwoStr = formatDate(dateTwo);

    //let dateOneStr = new Intl.DateTimeFormat('fr-CA').format(dateOne);
    //let dateTwoStr = new Intl.DateTimeFormat('fr-CA').format(dateTwo);
    //let dateTwoStr = dateTwo.toLocaleDateString('fr-CA');

    console.log(dateOne < dateTwo);
    if(dateOne < dateTwo){
        $.ajax({
            url : 'api/Reservation/report-dates/'+formatDate(dateOne)+'/'+formatDate(dateTwo),
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
                            <p class="card-text">Conteo de reservas desde el ${new Intl.DateTimeFormat('es-CO',{dateStyle:'full'}).format(dateOne)} hasta ${new Intl.DateTimeFormat('es-CO',{dateStyle:'full'}).format(dateTwo)}</p>
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


function formatDate(inputDate) {
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
  
    return `${year}-${month}-${day}`;
}