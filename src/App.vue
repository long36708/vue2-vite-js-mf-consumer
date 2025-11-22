<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {getMfInstance} from "@/helpers/mf-helper.js";

const mf = getMfInstance()

const RemoteButton = () => mf.loadRemote('vue2_vite_provider/BaseButton');
const loadAddModule = () => mf.loadRemote('vue2_vite_provider/add');

async function handleClick() {
  console.log('clicked')
  const addMd = await loadAddModule()
  const res = addMd.add(1, 2)
  console.log(res)
}
</script>

<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

      <div class="wrapper">
        <HelloWorld msg="You did it!"/>
      </div>
    </header>

    <main>
      <RemoteButton @click="handleClick"/>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
