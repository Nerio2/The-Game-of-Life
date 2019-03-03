<template>
    <div v-on:click="alive=!alive" id="TheGameOfLifeUnit" :class="getClass()"></div>

</template>

<script>
    export default {
        name: "TheGameOfLifeUnit",
        props: {
        },
        computed: {
            style() {
                return 'width:' + this.width + '%}';
            }
        },
        methods:{
            getClass(){
                if(this.alive) return "life";
                else return "dead";
            }
        },
        data(){
            return{
                alive: Boolean
            }
        },
        created() {
            this.alive=false;
        }
    }
</script>
<style scoped>
    #TheGameOfLifeUnit {
        float: left;
        height:20px;
        box-shadow: inset 0px 0px 1px 0px rgba(0,0,0,0.75);
    }
    .life{
        background-color: seagreen;
    }
    .dead{
        background-color: darkgray ;
    }
</style>