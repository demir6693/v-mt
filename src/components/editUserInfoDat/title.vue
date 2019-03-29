<template>
    <div>
        <h3>Kontrolni panel</h3>
        <strong>Dobrodošli, {{userInfo.fName + " " + userInfo.lName}}!</strong>
        <p>Ovde možete da pregledate Vaše nedavne aktivnosti i da menjate korisničke podatke.</p>

        <h5>Nedavne narudžbine</h5>
        <hr>
        <table class="table table-hover">
            <thead>
                <tr class="table-active">
                <th scope="col">Narudžbina broj</th>
                <th scope="col">Datum</th>
                <th scope="col">Isporuči</th>
                <th scope="col">Status</th>
                <th scope="col">Vidi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="items in receiptData.slice(0,4)">
                <td>{{items.id}}</td>
                <td>{{ getDate(items.dateofReceipt) }}</td>
                <td>{{items.usersInfo.fName + " " + items.usersInfo.lName}}</td>
                <td>Isporučeno</td>
                <td><i class="fas fa-search"></i></td>
                </tr>
            </tbody>
        </table>

        <br>

        <h3>Korisnički podaci</h3>
        <hr>
        <div class="row">
            <div class="col-5">
            <strong>Kontakt informacije</strong>
                <div class="div-user-info">
                    <p class="infoText">{{userInfo.fName + " " + userInfo.lName}}</p>
                    <p class="infoText">{{emailUser.email}}</p>
                </div>
            </div>
            <div class="col-6">
                <strong>Podrazumevana adresa isporuke i plaćanja</strong>
                <div class="div-user-info">
                    <p class="infoText">{{userInfo.grad + ", " + userInfo.postalCode}}</p>
                    <p class="infoText">{{userInfo.adresa}}</p>
                    <p class="infoText">{{userInfo.brTelefona}}</p>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    props:{
        receiptData: {},
        userInfo: {},
        
    },

    data(){
        return{
            emailUser: {}
        }
    },

    mounted(){
        this.emailUser = JSON.parse(localStorage.getItem("user"));
    },

    methods:{
        getDate: function(date)
        {   
            var dateFormat = new Date(date);
            var d = dateFormat.getTime();
            var tmp = new Date(d);
            return tmp.getDate() + "/" + tmp.getMonth() + "/" + tmp.getFullYear() + " | " + tmp.getHours() + ":" + tmp.getMinutes() + "h";
        }
    }
}
</script>

<style scoped>

.infoText{
    margin-bottom: 0%;
}

.div-user-info{
    background-color: #E7E6E6;
    border-left: 2px solid black;
}
</style>
