<template lang="pug">
   div(v-bem)
     h1.article__title {{title}}
     ArticleCard
</template>

<script>
import ArticleCard from './ArticleCard'
export default {
  data: () => ({
   title:'Статьи'
  }),
  name: 'Article',
  components: {
    ArticleCard
  }
}
</script>
