<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title class="absolute-center">
          WF TEST
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs
      >
        <FooterTab 
          v-for="link in essentialLinks"
          :key="link.title"
          :link="link"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      :breakpoint="767"
      :width="250"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import FooterTab from 'components/FooterTab.vue'

const linksData = [
  {
    title: 'Todo',
    // caption: 'quasar.dev',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  },
  {
    title: 'Help',
    icon: 'help',
    link: '/help'
  }
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink, FooterTab
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer{
      display: none;
    }
  }

  .q-drawer {
    .q-router-link--exact-active{
      background-color: lightsalmon !important;
      color: white !important;
    }
  }
</style>
