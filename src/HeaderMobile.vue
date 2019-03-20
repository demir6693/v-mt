<template>
<div>
    <div class="navbar-mobile">
            <div class="row">
                <div class="col-8">
                    <button type="button" class="btn my-logo-button" wfd-id="543" id="mbtown">
                        <i class="fas fa-list-ul"></i>
                    </button>
                    <router-link to="/">
                    <a class="navbar-brand naslov-header my-logo" href="#"  id="">
                        <strong>
                            MOBILE TOWN
                        </strong>
                    </a>
                    </router-link>
                </div>
                <div class="col-2 mycol-2">    
                    <button type="button" class="btn button-header" wfd-id="543" id="loginUser">
                        <i class="fas fa-user"></i>
                    </button>
                </div>
                <div class="col-2 mycol-2">
                    <button type="button" class="btn button-header" wfd-id="543" id="cartId">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        <div id="panelItems">
            <ul class="list-group" v-for="groups in grp.body">
                <li class="list-group-item">
                    <router-link :to="{ name: 'proizvodi', params: { kategorije: groups.name }}">
                        <a href="" class="items-navbar" @click="slideUpMenu">
                            {{ groups.name }}
                        </a>
                    </router-link>
                </li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item">
                    <router-link to="/lokacija-kontakt">
                        <a href="" class="items-navbar" @click="slideUpMenu">
                            Kontakt/Lokacija
                        </a>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <router-link to="/o-nama">
                        <a href="" class="items-navbar" @click="slideUpMenu">
                            O nama
                        </a>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <p style="float: right;" id="idUp">
                        <i class="fas fa-chevron-up fa-2x"></i>
                    </p>
                </li>
            </ul>
        </div>
        <div id="loginForm">
            <br>
            <form class="form" id="login-nav">
                <div class="form-group">
                        <input type="email" class="form-control" id="emailId" placeholder="Email adresa" >
                </div>
                <div class="form-group">
                        <input type="password" class="form-control" id="passId" placeholder="Šifra" >
                        <!--<div class="help-block text-right"><a href="">Forget the password ?</a></div> -->
                </div>
                <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block my-btn">Uloguj se</button>
                </div>
            </form>
        </div>
    </div>
    <br>
    <div class="container">
            <div class="container">
                <input class="form-control mr-sm-2 search-nav shadow-lg" type="text" placeholder="Pretraga" wfd-id="518">
            </div>
    </div>
    <br>
</div>
</template>

<script>
export default {
    props: ['grp'],

    mounted() { 
        $(document).ready(function(){
            $("#mbtown").click(function(){
                $("#panelItems").slideToggle("slow");
                $("#loginForm").slideUp();
            });
        });

        $(document).ready(function(){
            $("#loginUser").click(function(){
                $("#loginForm").slideToggle("slow");
                $("#panelItems").slideUp();
            });
        });

        $(document).ready(function(){
            $("#idUp").click(function(){
                $("#panelItems").slideUp();
            });
        });
    },

    methods: {
        slideUpMenu: function(){
            $(document).ready(function(){
                $("#panelItems").slideUp();
                $("#loginForm").slideUp();
            });
        }
    }
}
</script>

<style scoped>

.items-navbar{
    color: white;
}

.my-logo{
    color: #c60100; 
    font-size: 14pt;
    margin-top: 5%;
    margin-bottom: 5%;
}

.my-logo-button {
    margin-top: 4%;
    margin-bottom: 5%;
    color: white;
}

.list-group-item{
    background-color: #007bff;
    border: none;
}

.my-btn{
    background-color: #0049A7;
}

#panelItems  {
  padding: 5px;
  background-color: #007bff;
}

#panelItems {
    color: white;
    display: none;
}

#loginForm  {
  padding: 5px;
  background-color: #007bff;
}

#loginForm {
    color: white;
    display: none;
}

.dropdown-login{
    display: none;
    width: 100%;
    left: 0;
    position: absolute;
    z-index: 1;
}

.drop-downmenu-login{
    right: -50px;
    left: auto;
    width: 300px !important;
}

.mycol-2{
    margin-top: 3%;
    margin-left: -3%;
}

.navbar-mobile{
    background-color: #007bff;
}

.button-header{
    background-color: #0049A7;
    color: white;
}

</style>
