<template>
    <div id="TheGameOfLife">
        <h2>The Game Of Life</h2>
        <section v-bind:key="n" class="row" v-for="n in rows">
            <TheGameOfLifeUnit v-bind:style="{'width':unit_width+'%'}" v-bind:key="m" v-for="m in cols"></TheGameOfLifeUnit>
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
                unit_width: (100 / this.cols)
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>