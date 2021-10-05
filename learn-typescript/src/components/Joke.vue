<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { NButton } from 'naive-ui';
export default defineComponent({
    name: "Joke",
    setup() {
        let joke: any = ref("");
        let GetAJoke = () => {
            axios({
                method: "GET",
                url: "https://autumnfish.cn/api/joke"
            }).then(result => { joke.value = result.data })
        }
        return { joke, GetAJoke };
    },
    components: {
        NButton
    }
})
</script>
<template>
    <div id="text">{{ joke }}</div>
    <div id="button">
        <n-button v-on:click="GetAJoke">获取一个笑话</n-button>
    </div>
</template>
<style>
#text {
    width: 700px;
    float: left;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
    text-indent: 32px;
    line-height: 30px;
}
#button {
    padding-top: 60px;
    padding-left: 800px;
}
button {
    padding: 10px;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;
}
</style>