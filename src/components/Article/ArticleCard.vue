<template lang="pug">
   div(v-bem)
     form.article-card__filter(@submit.prevent="resetForm")
       input.article-card__filter-search(type="text", v-model="titleSearch", placeholder='Поиск по статьям(заголовок)')
       button.article-card__filter-button(type="submit" ) Очистить
     .article-card__container(v-if="!isLoading")
       .article-card__item(v-for="(item, index) in filteredList")
         .article-card__category(:key="index" v-on:click="item.show = !item.show") {{item.category}}
         transition(name="fade")
           .article-card__category-container(v-if="item.show")
             .article-card__title {{item.title}}
             img.article-card__images(:src="item.img")
             .article-card__description {{item.description}}
             button.article-card__category-likes(v-on:click="item.counter += 1") Лайк {{ item.counter }}
     .loader__tasks_box(v-else-if='isLoading')
       .loader__tasks
         div
         div
         div
         div
         div
         div
         div
         div
         div
</template>
<script>
import { mapActions, mapState, mapGetters} from 'vuex'

export default {
  data: () => ({
    titleSearch: ''
  }),
  name: 'ArticleCard',
  components: {

  },
  methods: {
    ...mapActions({
      appendArticle: 'loadArticle',
    }),
    resetForm(event){
      this.titleSearch = "";
    },

  },
  computed: {
    ...mapState([
      'article'
    ]),
    ...mapGetters([
      'isLoading'
    ]),
    filteredList(){
      return this.article.filter((elem) => {
        return elem.title.toLowerCase().includes(this.titleSearch.toLowerCase())
      })

    },
  },
  mounted() {
    this.appendArticle();
  },
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
