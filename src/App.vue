<script setup>
import HelloWorld from './components/HelloWorld.vue'

// 如果没有使用构建插件，那么可以创建新的实例，并注册模块
import { createInstance } from '@module-federation/enhanced/runtime';

const mf = createInstance({
  name: 'mf_host',
  remotes: [
    {
      name: 'vue2_vite_provider',
      alias: 'remote',
      entry: 'http://localhost:4174/mf-manifest.json',
    }
  ]
});
// const RemoteButton = defineAsyncComponent(
//     // @ts-ignore
//     () => mf.loadRemote("remote/BaseButton")
// );
const RemoteButton =  () => mf.loadRemote('vue2_vite_provider/BaseButton');
// mf.registerRemotes([
//   {
//     name: 'remote1',
//     alias: 'remote-1',
//     entry: 'http://localhost:3001/mf-manifest.json',
//   }
// ]);
</script>

<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>

    <main>
      <RemoteButton/>
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
