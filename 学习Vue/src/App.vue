<script>
import { defineAsyncComponent } from "vue"
export default {
    name: "app",
    data() {
        return {
            games: [
                { index: 0, gameName: "无人深空", url: "https://store.steampowered.com/app/275850/No_Mans_Sky/?snr=1_7_7_2300_150_1" },
                { index: 1, gameName: "死亡搁浅", url: "https://store.steampowered.com/app/1190460/DEATH_STRANDING/?snr=1_7_7_2300_150_1" },
                { index: 2, gameName: "天神镇", url: "https://store.steampowered.com/app/1426730/The_Immortal_Mayor/?snr=1_7_7_2300_150_1" },
                { index: 3, gameName: "欧洲卡车模拟器2", url: "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/?snr=1_7_7_2300_150_1" },
                { index: 4, gameName: "Maneater", url: "https://store.steampowered.com/app/629820/Maneater/?snr=1_7_7_2300_150_1" },
                { index: 5, gameName: "NBA 2K21", url: "https://store.steampowered.com/app/1225330/NBA_2K21/?snr=1_7_7_2300_150_1" },
                { index: 6, gameName: "嗜血印", url: "https://store.steampowered.com/app/992300/_Bloody_Spell/" }
            ],
            path: "./src/assets/0.png",
        };
    },
    methods: {
        GetPath: function (newPath) {
            this.path = newPath;
        }
    },
    components: {
        SideBar: defineAsyncComponent(() => import("./components/SideBar.vue"))
    }
};
</script>
<template>
    <div id="game">
        <div id="side">
            <SideBar v-for="item in games" v-bind="item" v-on:change-picture="GetPath"></SideBar>
        </div>
        <div id="pictures">
            <img v-bind:src="path" />
        </div>
    </div>
</template>
<style>
#game {
    width: 1900px;
    height: 350px;
}
#side {
    width: 300px;
    float: left;
    margin-left: 400px;
}
#side a {
    width: 300px;
    display: block;
    font-size: 16px;
    text-decoration: none;
    line-height: 50px;
    text-indent: 40px;
    color: white;
    background-color: gray;
}
#side a:hover {
    background-color: rgb(255, 136, 0);
}
#game #pictures img {
    height: 350px;
    width: 700px;
}
</style>