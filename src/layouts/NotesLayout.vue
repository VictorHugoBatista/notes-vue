<template>
  <q-layout view="hhh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Notes
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" overlay elevated>
      <!-- drawer content -->
      <EssentialLink
        v-for="link in sidebarLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  components: { EssentialLink },
  data () {
    return {
      left: false,
      sidebarLinks: [
        {
          title: 'List Notes',
          caption: '',
          icon: 'article',
          link: 'https://quasar.dev'
        },
        {
          title: 'Create Note',
          caption: '',
          icon: 'note_add',
          link: 'https://quasar.dev'
        }
      ]
    }
  }
}
</script>
