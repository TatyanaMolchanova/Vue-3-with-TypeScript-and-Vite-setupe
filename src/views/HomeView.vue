<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  type Ref,
  ref,
  type UnwrapRef
} from 'vue'
import { EventBus } from '@/utils/EventBus'

const counter: Ref<UnwrapRef<number>> = ref(0);

const multipleCounter = (payload: number) => {
  console.log('payload', payload)
  counter.value *= payload + 5;
  console.log('Multiplier counter.value', counter.value);
}

onMounted((): void => {
  counter.value++;

  EventBus.on('SubmitCounter', multipleCounter);
});

const submitCounter = () => {
  EventBus.emit('SubmitCounter', counter.value);
}

onBeforeUnmount((): void => {
  counter.value = 0;
  console.log('Component is about to be unmounted');
});

onUnmounted((): void => {
  EventBus.off('SubmitCounter', multipleCounter);
  console.log('EventBus off not working', EventBus);

  EventBus.all.delete('SubmitCounter');
  console.log('EventBus all delete working', EventBus);

  EventBus.all.clear();
  console.log('EventBus all clear working', EventBus);
});
</script>

<template>
  <section>
    <div class="counter">
      <p>{{ counter }}</p>
    </div>
    <button @click="submitCounter">Submit</button>
  </section>
</template>

<style scoped>
  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .counter p {
    color: #942929;
    font-size: 2rem;
  }
</style>
