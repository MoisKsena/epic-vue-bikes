<template>
  <div class="home">   
   <!--  header --> 
    <page-header />
    <!-- promo -->
    <promo />
    <div class="container">
      <div class="row">
        <!-- aside -->
        <side-bar />
        <main class="page-content col-9">
          <h2 class="page-content__cards-title">
            {{ title }}
          </h2>
  
          <div class="page-content__cards">
            <!-- card -->
            <card 
              v-for="item in cards"
              :key="item.id"
              :item="item"
            /> 


          </div>
        </main>
      </div>
    </div>
    <p>
      {{ print() }}
    </p>
    <p>
      <!-- {{ cards }} -->
    </p>
    
      <!-- footer -->
      <page-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import Card from '@/components/Card.vue'
import Promo from '@/components/Promo.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    SideBar,
    Card,
    Promo,
    PageHeader,
    PageFooter
  },
  data() {
    return {
      title: 'Каталог'
    }
  },
  methods: {
    ...mapActions({
      load:'GET_DATA'
    }),
    print() {
      this.output
      return this.output
    }
  },
  computed: {
    ...mapState([
      'cards'
    ]),
    output() {
      return ' function output'
    }
  },
  created() {
    this.load()
  },
  mounted() {
    console.log('mountad')
  },
}
</script>

<style src="@/assets/css/style.css"></style>
