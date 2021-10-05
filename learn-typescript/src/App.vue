<script lang="ts">
import { defineAsyncComponent, ref } from "vue";
export default {
    name: "app",
    setup() {
        let games: Array<any> = [
            { index: 0, gameName: "无人深空", url: "https://store.steampowered.com/app/275850/No_Mans_Sky/?snr=1_7_7_2300_150_1" },
            { index: 1, gameName: "死亡搁浅", url: "https://store.steampowered.com/app/1190460/DEATH_STRANDING/?snr=1_7_7_2300_150_1" },
            { index: 2, gameName: "天神镇", url: "https://store.steampowered.com/app/1426730/The_Immortal_Mayor/?snr=1_7_7_2300_150_1" },
            { index: 3, gameName: "欧洲卡车模拟器2", url: "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/?snr=1_7_7_2300_150_1" },
            { index: 4, gameName: "Maneater", url: "https://store.steampowered.com/app/629820/Maneater/?snr=1_7_7_2300_150_1" },
            { index: 5, gameName: "NBA 2K21", url: "https://store.steampowered.com/app/1225330/NBA_2K21/?snr=1_7_7_2300_150_1" },
            { index: 6, gameName: "嗜血印", url: "https://store.steampowered.com/app/992300/_Bloody_Spell/" }
        ];
        let path: any = ref<string>("./src/assets/0.png");
        let GetPath = (newPath: string) => {
            path.value = newPath;
        }
        return { games, path, GetPath }
    },
    components: {
        SideBar: defineAsyncComponent(() => import("./components/SideBar.vue")),
        Joke: defineAsyncComponent(() => import("./components/Joke.vue"))
    }
}
</script>
<template>
    <div id="side">
        <SideBar v-for="item in games" v-bind="item" v-on:change-picture="GetPath"></SideBar>
    </div>
    <div id="pictures">
        <img v-bind:src="path" title="游戏图片" />
    </div>
    <div id="Joke">
        <Joke></Joke>
    </div>
    <div id="learnRouter">
        <router-link to="/Home">家页面</router-link>
        <router-link to="/About">关于页面</router-link>
        <router-view></router-view>
    </div>
</template>
<style>
#app {
    width: 1900px;
    height: 700px;
}
#side {
    width: 300px;
    float: left;
    margin-left: 400px;
}
#pictures img {
    height: 350px;
    width: 700px;
}
#Joke {
    background-color: rgb(219, 255, 247);
    margin-left: 400px;
    margin-right: 500px;
    height: 200px;
}
</style>
