<template>
    <div id="TheGameOfLifeUnit" :class="getClass()"></div>

</template>

<script>
    export default {
        name: "TheGameOfLifeUnit",
        props: {
            alive: Boolean
        },
        methods: {
            getClass() {
                if (this.alive) return "life";
                else return "dead";
            }
        },
        data() {
            return {}
        },
        created() {

        }
    }
</script>
<style scoped>
    #TheGameOfLifeUnit {
        height: 100%;
        box-shadow: inset 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
        width:100%;
    }

    .life {
        background-color: seagreen;
    }

    .dead {
        background-color: darkgray;
    }
</style>