<template>
    <div id="TheGameOfLife">
        <h2>The Game Of Life</h2>
        <section v-bind:key="y" class="row" v-for="y in rows" @click="move(2,y)">
            <TheGameOfLifeUnit v-bind:style="{'width':unit_width+'%'}" v-bind:key="x" v-for="x in cols"
                               @click="move(x,y)" :alive="status[y-1][x-1]"></TheGameOfLifeUnit>
            {{status[y-1]}}
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
                prevStatus: []
            }
        },
        methods: {
            move(x, y) {
                alert(this.status[y - 1][x - 1]);
                this.status[y - 1][x - 1] = !this.status[y - 1][x - 1];
            }
        },
        created() {
            let z = this.rows > this.cols ? this.rows : this.cols;
            for (let y = 0; y < this.rows; y++) {
                this.status.push([]);
                for (let x = 0; x < this.cols; x++) {
                    this.status[y].push(false);
                }
            }
            for (let i = 0; i < z; i++) {
                this.status[i][i] = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>