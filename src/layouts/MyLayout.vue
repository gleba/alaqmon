<template lang="pug">
  q-layout(view="hHh Lpr lFf")
    q-header(elevated)
      q-toolbar
        q-btn(
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu")
          q-icon(name="menu")
        q-toolbar-title Alaq Monitor
        div Quasar v{{ $q.version }}
    q-drawer(
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2")
      q-list
        q-item-label(header) Sessions
          q-item(v-for="session in items" :key='session.sid' clickable @click="socket.emit('select', session.sid)")
            q-item-section
              q-item-label(:style="session.online && 'fontWeight:bold'") {{session.title}}
              q-item-label(caption) {{session.time}}
              //q-item-label(caption) {{session.online}}
    q-page-container
      router-view
</template>

<script lang="ts">
import { openURL } from 'quasar';

import Vue from 'vue';

export default Vue.extend({
  name: 'MyLayout',
  data() {
    return {
      socket,
      leftDrawerOpen: false
    };
  },
  // la: f => ({
  //   cat:f.overall.sessions
  // }),

  use({ base }) {
    base.menuItems.as('items');
  },
  methods: {
    openURL
  }
});
</script>

<style></style>
