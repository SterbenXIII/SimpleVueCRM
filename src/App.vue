<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
import DetailRecord from '@/layouts/MainLayout'
import History from '@/layouts/MainLayout'
import Home from '@/layouts/MainLayout'
import Planing from '@/layouts/MainLayout'
import Profile from '@/layouts/MainLayout'
import Record from '@/layouts/MainLayout'
import Register from '@/layouts/EmptyLayout'

  export default {
      computed: {
        layout() {

          return (this.$route.meta.layout || 'empty') + '-layout' 
        }
      },
      components: {
        EmptyLayout, MainLayout, DetailRecord, History, Home, Planing, Profile, Record, Register
      }
  }
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css'
</style>
