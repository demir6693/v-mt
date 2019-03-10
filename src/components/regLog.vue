<template>
    <div class="container">
        <hr>
        <div class="row">
            
            <div class="col">

            </div>

            <div class="col-6 regStyle">

            <div id="regEmail">

                <h3 style="text-align: center;">Registracija</h3>
                
                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Email adresa</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" wfd-id="508">
                </div>

                <div class="form-group" wfd-id="355">
                    <label for="exampleInputPassword1" wfd-id="357">Šifra</label>
                    <input type="password" class="form-control" id="sifra1" wfd-id="507">
                </div>

                <div class="form-group" wfd-id="355">
                    <label for="exampleInputPassword1" wfd-id="357">Ponovite šifru</label>
                    <input type="password" class="form-control" id="sifra2" wfd-id="507">
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-xs" @click="ShowSpecsPic">Registruj se</button>
                </div>
            </div>

            <div id="regInfo">
                
                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Ime</label>
                    <input type="text" class="form-control" id="ime" aria-describedby="nameHelp"  wfd-id="508">
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Prezime</label>
                    <input type="text" class="form-control" id="prezime" aria-describedby="lastnameHelp"  wfd-id="508">
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Korisničko ime</label>
                    <input type="text" class="form-control" id="korisnickoIme" aria-describedby="usernameHelp"  wfd-id="508">
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Adresa</label>
                    <input type="email" class="form-control" id="adresa" wfd-id="508">
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Grad</label>
                    <input type="email" class="form-control" id="grad" wfd-id="508">
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Poštanski broj</label>
                    <input type="email" class="form-control" id="postanskiBr" wfd-id="508">
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Telefon</label>
                    <input type="email" class="form-control" id="telefon" wfd-id="508">
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg" wfd-id="562">Unesi</button>
                </div>
            
            </div>

                <hr>

            </div>

            <div class="col">
                <button type="button" class="btn btn-primary btn-sm" id="skipInfo">Preskoči <i class="fas fa-arrow-right"></i></button>
            </div>

        </div>
    </div>
</template>


<script>
export default {
    methods: {
        ShowSpecsPic:function() {
            $(document).ready(function(){
                $("#regInfo").slideDown();
                $("#skipInfo").slideDown();
                $("#regEmail").slideUp();
            });
        }
    }
}
</script>

<style scoped>

.regStyle{

}

#regInfo, #skipInfo{
    display: none;
}
</style>
