<script setup lang="ts">
const mouseOverEl = ref();

type MyScript = {
  run: () => void;
};

declare global {
  interface Window extends MyScript {}
}

const { load, onLoaded, run: displayWidget, status } = useScript<MyScript>(
  "https://gist.githubusercontent.com/manniL/ea4b686400bc2951748636ce42f3c1f0/raw/28d8cece98caf731985f64b25d677513df0514d0/test.js",
  {
    trigger: useScriptTriggerElement({
      trigger: "mouseover",
      el: mouseOverEl,
    }),
    bundle: true,
    use() {
      return {
        run: window.run,
      };
    },
  }
);

onLoaded(({ run }) => {
  run()
})

const showWidget = async () => {
  if(status.value === 'awaitingLoad') {
    await load()
  }
  displayWidget()
}

</script>

<template>
  <div>
    <br /><br /><br /><br />
    <div ref="mouseOverEl">
      <h1>Load this script please!</h1>
    </div>
    <button @click="showWidget">Show widget{{ status !== 'awaitingLoad' ? ' (again)' : '' }}</button>
    <ClientOnly> Status: {{ status }} </ClientOnly>
  </div>
</template>
