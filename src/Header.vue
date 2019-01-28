<template>
        <div class="container">
             
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" wfd-id="591">
                <span class="navbar-toggler-icon" wfd-id="441"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor02" wfd-id="433">
                <ul class="navbar-nav mr-auto" wfd-id="435">
                <li class="nav-item" wfd-id="439">
                    <a class="nav-link" href="https://www.facebook.com/mobiletown2013/"><i class="fab fa-facebook fa-2x"></i></a>
                </li>
                <li class="nav-item" wfd-id="438">
                    <a class="nav-link" href="https://www.instagram.com/mobile_town/"><i class="fab fa-instagram fa-2x"></i></a>
                </li>
                <li class="nav-item" wfd-id="437">
                    <a class="nav-link" href="#">office@mobiletown.rs</a>
                </li>
                </ul>
            </div>


            <div class="collapse navbar-collapse" id="navbarColor02" wfd-id="433">
                <ul class="navbar-nav ml-auto" wfd-id="435">
                <li class="nav-item" wfd-id="438">
                    <router-link to="/lokacija-kontakt"><a class="nav-link">Kontakt/Lokacija</a></router-link>
                    
                </li>
                <li class="nav-item border-left" wfd-id="438">
                    <router-link to="/o-nama"><a class="nav-link">O nama</a></router-link>
                </li>
                </ul>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-dark nav-color ">
            <router-link to="/"><a class="navbar-brand"><img src="./assets/lg_new.png" alt=""></a></router-link>    
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" wfd-id="595">
                <span class="navbar-toggler-icon" wfd-id="461"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01" wfd-id="453">
                <ul class="navbar-nav mx-md-auto" wfd-id="455">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Login/User</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#"><i class="fas fa-shopping-cart fa-2x"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
                </ul>
            </div>

            <div class="collapse navbar-collapse" id="navbarColor01" wfd-id="453">
                <ul class="navbar-nav ml-auto" wfd-id="455">
                <li class="nav-item">
                <div class="input-group input-group-lg">
                    <input type="text" class="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                        <div class="input-group-prepend ">
                        <span class="input-group-text " id="inputGroup-sizing-lg"><i class="fas fa-search"></i></span>
                    </div>
                </div>
                </li>
                </ul> 
              
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><i class="fas fa-bars"></i> Proizvodi</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" wfd-id="591">
                <span class="navbar-toggler-icon" wfd-id="441"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor03" wfd-id="433">
                <ul class="navbar-nav mr-auto" wfd-id="435">
                <li class="nav-item" wfd-id="439">
                    <a class="nav-link" href="#">Akcije</a>
                </li>
                <li class="nav-item" wfd-id="438">
                    <a class="nav-link" href="#">OUTLET</a>
                </li>
                </ul>
            </div>
</nav>
    </div>
</template>

<style>

.nav-color {
    background-color: #145bcd;
    border: 3px solid #c60100;
    border-radius: 20px;
}

</style>
