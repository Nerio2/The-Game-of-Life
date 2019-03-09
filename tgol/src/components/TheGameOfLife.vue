<template>
    <div id="TheGameOfLife">
        <h2>The Game Of Life</h2>
        <button @click="move()">Move</button>
        <br>
        <input type="number" placeholder="Interval" id="interval">
        <button @click="auto()">Auto</button>
        <div v-bind:key="y" v-for="y in rows">
            <div class="tgolUnit" v-bind:key="x" v-for="x in cols" @click="change(x,y)"
                 v-bind:style="{'width':unit_width+'%'}">
                <TheGameOfLifeUnit :alive="status[y-1][x-1]">{{getNeighbours(x-1,y-1)}}</TheGameOfLifeUnit>

            </div>
        </div>
        alive: {{alive}}
        ticks: {{ticks}}
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
            cols: Number,
            rand: Boolean
        },
        data() {
            return {
                unit_width: (100 / this.cols),
                status: [],
                alive: 0,
                ticks: 0
            }
        },
        methods: {
            change(x, y) {
                this.status[y - 1][x - 1] = !this.status[y - 1][x - 1];
                this.alive += this.status[y - 1][x - 1] ? 1 : -1;
            },
            move() {
                this.alive=0;
                this.ticks++;
                let nextStatus = [];
                for (let y = 0; y < this.rows; y++) {
                    nextStatus.push([]);
                    for (let x = 0; x < this.cols; x++) {
                        if (this.status[y][x]) {
                            nextStatus[y].push(!(this.getNeighbours(x, y) > 3 || this.getNeighbours(x, y) < 2));
                        } else {
                            nextStatus[y].push((this.getNeighbours(x, y) === 3));
                        }
                        this.alive+=nextStatus[y][x] ? 1 : 0;
                    }
                }
                this.status = nextStatus;
            },
            getNeighbours(x, y) {
                let count = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if ((y + i >= 0 && y + i < this.rows) && (x + j >= 0 && x + j < this.cols) && this.status[y + i][x + j] && (i !== 0 || j !== 0))
                            count++;
                    }
                }
                return count;
            }
        },
        created() {
            for (let y = 0; y < this.rows; y++) {
                this.status.push([]);
                for (let x = 0; x < this.cols; x++) {
                    this.status[y].push(false);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tgolUnit {
        float: left;
        height: 1vh;
    }

    #TheGameOfLife {
        width: 100%;
        height: 100%;
    }
</style>