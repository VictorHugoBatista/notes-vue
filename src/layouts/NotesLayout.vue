<template>
  <q-layout view="hhh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
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
      <div class="container">
        <router-view />
      </div>
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLinkInternal.vue'

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
          link: 'notes-list'
        },
        {
          title: 'Create Note',
          caption: '',
          icon: 'note_add',
          link: 'notes-create'
        }
      ]
    }
  }
}
</script>
