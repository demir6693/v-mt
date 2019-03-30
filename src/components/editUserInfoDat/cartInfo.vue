<template>
    <div class="container">
        <div class="table-responsive">
                <table class="table" v-for="(items, index) in receiptItems">
                    <thead>
                        <tr class="table-active">
                        <th scope="col">Račun broj: {{receiptData[index].id}}</th>
                        <th scope="col">Datum: {{ getDate(receiptData[index].dateofReceipt) }}</th>
                        <th scope="col">Status: Isporučeno</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>

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
                        <td>1</td>
                        <td>{{itm.product.price}} din</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td></td>
                        <td></td>
                        <td>Ukupno:</td>
                        <td><strong>{{sumPrice}} din</strong>
                            <p style="display:none;">
                            {{sumPrice = 0}}
                            </p>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr>
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
