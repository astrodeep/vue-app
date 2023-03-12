<template lang="pug">
   #app
     .container
       nav.navigation
         router-link(to="/", class="navigation__item") Статьи
       router-view
</template>
<script>
import Article from './components/Article/Article.vue'
export default {
  name: 'App',
  components: {
    Article
  }
}
</script>
