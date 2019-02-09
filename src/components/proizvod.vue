<template>
    <div class="container">
        <div class="d-none d-lg-block">
            <app-proizvodPC></app-proizvodPC>
        </div>
        
        <div class="d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
            <app-proizvodMobile></app-proizvodMobile>
        </div>
    </div>    
</template>

<script>
import proizvodMobile from './proizvodResponse/proizvodMobile.vue';
import proizvodPC from './proizvodResponse/proizvodPC.vue';

export default {
    components: {
        appProizvodPC: proizvodPC,
        appProizvodMobile: proizvodMobile
    }
}
</script>


<style>

</style>
