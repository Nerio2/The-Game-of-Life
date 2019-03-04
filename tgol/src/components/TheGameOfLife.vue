<template>
    <div id="TheGameOfLife">
        <h2>The Game Of Life</h2>
        <section v-bind:key="y" class="row" v-for="y in rows">
            <TheGameOfLifeUnit v-bind:style="{'width':unit_width+'%'}" v-bind:key="x" v-for="x in cols" v-on:click="cosik()" :alive="status[y-1][x-1]"></TheGameOfLifeUnit>
        </section>
    </div>
</template>

<script>
    import TheGameOfLifeUnit from './TheGameOfLifeUnit.vue'

    export default {
        name: "TheGameOfLife",
        components: {
            TheGameOfLifeUnit
        },
        props: {
            rows: Number,
            cols: Number
        },
        data() {
            return {
                unit_width: (100 / this.cols),
                status: [],
                prevStatus: [],
                y: 0,
                x: 0
            }
        },
        methods: {
            move(x,y) {
                status[y-1][x-1]=!status[y-1][x-1];
                console.log(status[y-1][x-1]);
            },
            cosik(){
                console.log("dziala");
            }
        },
        created() {
            for (let y = 0; y <= this.rows; y++) {
                this.status.push([]);
                for (let x = 0; x <= this.cols; x++) {
                    this.status[y].push(false);
                }
            }
            for (let i = 0; i < this.rows; i++) {
                this.status[i][i]=true;
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>