<template>
    <div class="container my-footer">
        <div class="row">

            <div class="col-sm border-right my-col-sm">
                <br>
                
                <p>
                    <strong>Novi Pazar, 36300</strong>
                </p> 

                <p>
                   <i class="fas fa-map-marker-alt"></i>
                    Ulica Stevana Nemanje br. 44
                </p>
                
                <p>
                    <i class="far fa-clock"></i>
                    08-21h, nedeljom 09-16h 
                </p>

                <p>
                    <i class="fas fa-phone"></i>
                    +381 20 602 381
                </p>

                <p>
                    <i class="far fa-envelope"></i>
                    office@mobiletown.rs
                </p>
            </div>

            <div class="col-sm border-right my-col-sm">
                <br>
                <p>
                    <strong>Posetite nas na društvenim mrežama</strong>
                </p>
                
                <a class="nav-link" href="https://www.facebook.com/mobiletown2013/"><i class="fab fa-facebook fa-2x"></i></a>


                <a class="nav-link" href="https://www.instagram.com/mobile_town/"><i class="fab fa-instagram fa-2x"></i></a>
            </div>

            <div class="col-sm my-col-sm">
                <br>
                <router-link to="/"><a class="navbar-brand"><img src="./assets/lg_new.png" alt=""></a></router-link>
            </div>

        </div>
    </div>
</template>

<style>
.my-footer {
    color: #474747;
    background-color: #E7E6E6;
}

.my-col-sm {
    text-align: center;
}
</style>
