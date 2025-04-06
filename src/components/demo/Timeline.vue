<template>
  <Timeline :value="props.events">
    <template #content="slotProps">
      <Card class="timeline-card">
        <template #title>
          {{ slotProps.item.status }}
        </template>
        <template #subtitle>
          {{ slotProps.item.date }}
        </template>
        <template #content>
          <img v-if="slotProps.item.image"
            :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`"
            :alt="slotProps.item.name" width="200" class="shadow-sm" />
          <p>
            {{ slotProps.item.text }}
          </p>
        </template>
      </Card>
    </template>
  </Timeline>
</template>

<script setup lang="ts">
import { Timeline, Card } from 'primevue';
const props = defineProps({
  events: Array
});

</script>

<style lang="scss" scoped>
.timeline-card{
  margin: 10px 0px;
  width: 400px;
}
</style>
