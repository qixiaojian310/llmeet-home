<template>
  <DemoView :events="events" :details="details"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DemoView from './DemoView.vue';

const events = ref([
  {
    status: 'Design init',
    date: '2025-03-15',
    color: '#9C27B0',
    text: 'Completed the initial UI design, including the layout for the meeting interface, button styles, and color scheme.',
  },
  {
    status: 'Use Tauri init',
    date: '2025-03-20',
    color: '#673AB7',
    text: 'Initialized the Tauri project and set up the cross-platform desktop app foundation, enabling communication between frontend and system layers.',
  },
  {
    status: 'Create basic layout',
    date: '2025-04-01',
    color: '#FF9800',
    text: 'Built the core application layout, including the top navigation bar, video display area, and control panel structure.',
  },
  {
    status: 'Finish frontend startup',
    date: '2025-04-05',
    color: '#607D8B',
    text: 'Implemented camera access using the MediaDevices API and completed the initial frontend startup flow, establishing basic communication with the backend.',
  },
  {
    status: 'Finish HTTP Wrapper',
    date: '2025-05-05',
    color: '#607D8B',
    text: 'We use tauri and rust to wrapper the http and https request from client, which can reduce the risk of the client from being hacked and no need to consider CORS problem',
  }
]);

const details = ref([
    {
      path: new URL('@/assets/frontend/f-1.png', import.meta.url).href,
      description: 'Login',
    },
    {
      path: new URL('@/assets/frontend/f-2.png', import.meta.url).href,
      description: 'Home',
    },
    {
      path: new URL('@/assets/frontend/f-3.png', import.meta.url).href,
      description: 'Create a meeting',
    },
    {
      path: new URL('@/assets/frontend/f-4.png', import.meta.url).href,
      description: 'Conference',
    },
    {
      path: new URL('@/assets/frontend/f-5.png', import.meta.url).href,
      description: 'Join a meeting',
    },
    {
      path: new URL('@/assets/frontend/f-6.png', import.meta.url).href,
      description: 'Conference records list',
    },
    {
      path: new URL('@/assets/frontend/f-7.png', import.meta.url).href,
      description: 'Conference record',
    },
    {
      path: new URL('@/assets/frontend/f-8.png', import.meta.url).href,
      description: 'Register',
    }
])
</script>

<style scoped></style>