$(document).ready(function() {
    headerMenu();
});

function headerMenu(){
    // Menu
    $("#mainMenu").empty();
    let jsHome = "index.html";
    let jsCategories ="category.html";
    let jsBoxes ="box.html";
    let jsClients ="client.html";
    let jsReservations ="#";
    let jsMessages ="#";
    let jsReport1 = "report1.html";
    let jsReport2 = "report2.html";
    let jsReport3 = "report3.html";

    let myHeader = `
    <nav class="navbar navbar-expand-lg bg-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="img/logo-rent.svg"  alt="Rent-a-box" height="40">
                    Rent-a-box
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="${jsHome}">Inicio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="${jsHome}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Acciones
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="${jsCategories}">Categorías</a></li>
                                <li><a class="dropdown-item" href="${jsBoxes}">Palcos</a></li>
                                <li><a class="dropdown-item" href="${jsClients}">Clientes</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="${jsReservations}">Reservaciones</a></li>
                                <li><a class="dropdown-item" href="${jsMessages}">Mensajes</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Reportes
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="${jsReport1}">Cantidad de reservas en un tiempo determinado</a></li>
                                <li><a class="dropdown-item" href="${jsReport2}">Cantidad de reservas completas vs canceladas</a></li>
                                <li><a class="dropdown-item" href="${jsReport3}">Top de los clientes que más dinero invierten</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    $("#mainMenu").append(myHeader);

    // Title
    $("#titleReto").empty();
    //$("#titleReto").append("RETO 5");

}