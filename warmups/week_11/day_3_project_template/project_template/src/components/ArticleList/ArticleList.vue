<template>
  <div class="c-article-list">
    <ArticleItem
      v-for="article in articlesPagination"
      :key="article.id"
      :article="article"
    />
    <InfiniteScroll @triggerIntersected="loadMore" />
    <footer class="c-article-list__footer" v-if="!showLoader">
      <div class="o-circle-loader c-article-list__loader"></div>
    </footer>
  </div>
</template>

<script>
import ArticleItem from "../ArticleItem/ArticleItem.vue";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "ArticlesList",
  components: {
    ArticleItem,
    InfiniteScroll,
  },
  data() {
    return {
      sizePage: 10
    };
  },
  methods: {
    loadMore() {
      this.SET_CURRENT_PAGE(this.getCurrentPage + 1);

      this.LOAD_ARTICLES_PAGINATION({
        page: this.getCurrentPage,
        pageSize: this.sizePage,
      });
    },
    ...mapActions(["LOAD_ARTICLES_LIST", "LOAD_ARTICLES_PAGINATION"]),
    ...mapMutations(["SET_CURRENT_PAGE"]),
  },
  computed: {
    ...mapGetters({
      articlesPagination: "getArticlesPagination",
      showLoader: "getLoaderStatus",
      getCurrentPage: "getCurrenPage",
    }),
  },
};
</script>

<style lang="scss">
.c-article-list {
  @apply my-14 flex  flex-wrap  justify-between;

  &__footer {
    @apply relative h-16 self-center w-full z-20;
  }
  
	@include t-media-query($s-medium-up) {
		@apply flex-row;
	}

}

.o-circle-loader {
    @apply absolute h-16 w-16 top-1/2 left-1/2;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 0.785rem solid rgba(249, 250, 251, var(--tw-bg-opacity));
    border-top: 0.785rem solid black;
    animation: animate 1.5s infinite linear;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
</style>
