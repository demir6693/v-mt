<template>
    <div>
        
        <div v-for="(items, index) in receiptItems">
            <table class="table">
                <thead>
                    <tr class="table-active">
                    <th scope="col">Račun broj: {{receiptData[index].id}}</th>
                    <th scope="col">Datum: {{ getDate(receiptData[index].dateofReceipt) }}</th>
                    <th scope="col">Status: Isporučeno</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
            </table>
         
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Šifra artikla</th>
                    <th scope="col">Naziv artikla</th>
                    <th scope="col">Količina</th>
                    <th scope="col">Cena</th>
                    </tr>
                </thead>
                <tbody v-for="itm in items" :value="sumPrice += itm.product.price">
                    <tr>
                    <td>{{itm.product.id}}</td>
                    <td>{{itm.product.name.substring(0, 15) + "..."}}</td>
                    <td>Kolicina</td>
                    <td>{{itm.product.price}} din</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td>Ukupno:</td>
                    <td><strong>{{sumPrice}} din</strong></td>
                    </tr>
                </tbody>
                <p style="display:none;">
                    {{sumPrice = 0}}
                </p>
            </table>
        
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        receiptData: {},
        receiptItems: []
    },

    data(){
        return{
            items: [],
            sumPrice: 0
        }
    },

    mounted(){
       
    },

    methods:
    { 
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

</style>
