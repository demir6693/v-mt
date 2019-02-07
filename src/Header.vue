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
                
               <li class="dropdown">
          <a href="#" class="nav-link active" data-toggle="dropdown"><b>Uloguj se</b> <span class="caret"></span></a>
			<ul id="login-dp" class="dropdown-menu">
				<li>
					 <div class="row">
							<div class="col-md-12">
								 <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
										<div class="form-group">
											 <label class="sr-only" for="exampleInputEmail2">Email adresa</label>
											 <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email adresa" required>
										</div>
										<div class="form-group">
											 <label class="sr-only" for="exampleInputPassword2">Šifra</label>
											 <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Šifra" required>
                                             <!--<div class="help-block text-right"><a href="">Forget the password ?</a></div> -->
										</div>
										<div class="form-group">
											 <button type="submit" class="btn btn-primary btn-block">Uloguj se</button>
										</div>
								 </form>
							</div>
					 </div>
				</li>
			</ul>
        </li>

                <li class="nav-item active">
                    <a class="nav-link"><i class="fas fa-shopping-cart fa-2x"></i></a>
                </li>
                <li class="nav-item">
                    <router-link to="/moj-nalog"><a class="nav-link">Registruj se</a></router-link>
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
            
            <button class="navbar-brand" id="buttonProizvodi" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-bars"></i> Proizvodi</button>
                <div class="dropdown-menu" aria-labelledby="buttonProizvodi" id="dropdownItems">
                    <a class="dropdown-item" href="#">Kategorija 1</a>
                    <a class="dropdown-item" href="#">Kategorija 2</a>
                    <a class="dropdown-item" href="#">Kategorija 3</a>
                </div>


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

#buttonProizvodi {
    background-color: #f8f9fa;
    border: 0px;
}

#buttonProizvodi:hover {
    cursor: pointer;
}

#navItemDropDown{
   cursor: pointer;
}

#loginDropDownItems{
    border: #145bcd 3px solid;
    border-radius: 20px;
}

#login-dp{
    min-width: 250px;
    padding: 14px 14px 0;
    overflow:hidden;
    background-color:rgba(255,255,255,.8);
}
#login-dp .help-block{
    font-size:12px    
}
#login-dp .bottom{
    background-color:rgba(255,255,255,.8);
    border-top:1px solid #ddd;
    clear:both;
    padding:14px;
}
#login-dp .social-buttons{
    margin:12px 0    
}
#login-dp .social-buttons a{
    width: 49%;
}
#login-dp .form-group {
    margin-bottom: 10px;
}
.btn-fb{
    color: #fff;
    background-color:#3b5998;
}
.btn-fb:hover{
    color: #fff;
    background-color:#496ebc 
}
.btn-tw{
    color: #fff;
    background-color:#55acee;
}
.btn-tw:hover{
    color: #fff;
    background-color:#59b5fa;
}
@media(max-width:768px){
    #login-dp{
        background-color: inherit;
        color: #fff;
    }
    #login-dp .bottom{
        background-color: inherit;
        border-top:0 none;
    }
}

</style>
