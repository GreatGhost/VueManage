<template>
    <div class="form">

        <A />
        <div>
            <A>
                <B>
                    <C @change="changeInput"></C>
                </B>
            </A>
        </div>
    </div>
</template>

<script>
import A from '../../components/A/A'
import B from '../../components/B/B'
import C from '../../components/C/C'
    export default {
        components: {
            A,B,C
        },
        props: {},
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {
            changeInput(e){
                console.log(e)
            }
        },
        created() {},
        mounted() {}
    }
</script>
<style lang="less" scoped>
    .form {}
</style>