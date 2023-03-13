<template lang="pug">
   div(v-bem)
     form.article-card__filter(@submit.prevent="resetForm")
       input.article-card__filter-search(type="text", v-model="titleSearch", placeholder='Поиск по статьям(заголовок)')
       button.article-card__filter-button(type="submit" ) Очистить
     .article-card__container(v-if="!isLoading")
       .article-card__item(v-for="(item, index) in filteredList" :key="index")
         .article-card__category(:class="{'active': item.active}" @click="toggleTitle(item)") {{item.category}}
         .article-card__category-container(:class="{noneActive: item.active}")
             .article-card__title {{item.title}}
             img.article-card__images(:src="item.img")
             .article-card__description {{item.description}}
             button.article-card__category-likes(v-on:click="itemCounter(item)") Лайк {{ item.counter }}
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
import Vue from "vue";
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
    itemCounter: el => el.counter += 1,
    toggleTitle(elems) {
      Vue.set(elems, 'active', !elems.active);
    }

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
