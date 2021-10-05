<template>
    <a v-bind:href="url" class="sideElem" v-on:mouseover="overSide" target="_blank">{{ gameName }}</a>
</template>
<script lang="ts">
import { defineComponent, toRefs } from 'vue';
export default defineComponent({
    name: "SideBar",
    props: {
        index: Number,
        url: String,
        gameName: String
    },
    setup(props, context) {
        let { index, url, gameName } = toRefs(props)
        let overSide = () => {
            context.emit('changePicture', "./src/assets/" + props.index + ".png");
        }
        return { overSide, index, url, gameName };
    }
})
</script>
<style>
a {
    width: 300px;
    display: block;
    font-size: 16px;
    text-decoration: none;
    line-height: 50px;
    text-indent: 40px;
    color: white;
    background-color: gray;
}
a:hover {
    background-color: rgb(255, 136, 0);
}
</style>