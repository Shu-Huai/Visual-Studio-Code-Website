<template>
    这是一个家页面
    <n-button @click="GoToAbout">跳转到关于页面</n-button>
    <n-button @click="GoBack">返回上一个页面</n-button>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { NButton } from 'naive-ui'
export default {
    name: "Home",
    setup() {
        let router = useRouter();
        let GoToAbout = () => {
            router.push("/About")
        }
        let GoBack = () => {
            router.go(-1);
        }
        return { GoToAbout, GoBack };
    },
    components: {
        NButton
    }
}
</script>