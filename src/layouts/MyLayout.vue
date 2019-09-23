<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar
        q-btn(
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu")
          q-icon(name="menu")
        q-toolbar-title Quasar App
        div Quasar v{{ $q.version }}
    q-drawer(
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-2")
      q-list
        q-item-label(header) Essential Links
          q-item(clickable tag="a" target="_blank" href="https://quasar.dev")
            q-item-section(avatar)
              q-icon(name="school")
            q-item-section
              q-item-label Docs
              q-item-label(caption) quasar.dev
    q-page-container
      router-view
</template>

<script lang="ts">
import { openURL } from 'quasar'

import Vue from 'vue'

export default Vue.extend({
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
})
</script>

<style>
</style>
