<template>
    <a
        v-bind:href="url"
        class="sideElem"
        v-on:mouseover="overSide(index)"
        target="_blank"
    >{{ gameName }}</a>
</template>
<script>
export default {
    name: "SideBar",
    props: {
        index: Number,
        url: String,
        gameName: String
    },
    methods: {
        overSide: function (index) {
            this.$emit('changePicture', "./src/assets/" + index + ".png");
        }
    }
}
</script>
<style>
</style>