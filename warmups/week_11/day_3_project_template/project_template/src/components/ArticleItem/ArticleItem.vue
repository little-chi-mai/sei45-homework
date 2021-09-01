<template>
  <article class="c-article-item">
    <div class="c-article-item__container">
      <header class="c-article-item__header">
        <a class="c-article-item__link" :href="article.url">
          <h1 class="c-article-item__title">{{ article.title }}</h1>
        </a>
        <p v-if="article.author">
          <span> By {{ article.author.name || 'not available' }}</span>
        </p>
      </header>
      <div class="c-article-item__content">
        <div class="c-article-item__excerpt-container">
          <p
            class="c-article-item__excerpt"
            v-html="article.excerpts[0].text"
          ></p>
          <p
            class="c-article-item__excerpt"
            v-show="toggleExcerpts"
            v-html="
              article.excerpts
                .slice(1)
                .map((e) => e.text)
                .join('')
            "
          ></p>
          <div
            class="c-article-item__button-container"
            v-if="article.excerpts.length > 1"
          >
            <button
              class="o-button c-article-item__button"
              ref="buttonText"
              @click="showReadMore"
            >
              {{ buttonText }}
            </button>
          </div>
        </div>
        <div class="c-article-item__source">
          <img
            class="c-article-item__image"
            v-if="article.source.logo_url"
            :src="article.source.logo_url"
            :alt="article.source.name"
          />
          <p>{{ article.source.name }}</p>
        </div>
      </div>

      <div class="c-article-item__footer">
        <span>{{ wordCount }} {{ article.word_count }}</span>
        <span>{{
          article.published_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")
        }}</span>
      </div>
    </div>
  </article>
</template>

<script>
import Constants from "../../store/modules/constants";

export default {
  name: "ArticleItem",
  data() {
    return {
      toggleExcerpts: false,
      buttonText: Constants.TEXT.READ_MORE,
      wordCount: Constants.TEXT.WORD_COUNT,
    };
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showReadMore: function () {
      this.toggleExcerpts = !this.toggleExcerpts;
      this.buttonText = this.toggleExcerpts ? "read less" : "read more";
    },
  },
};
</script>

<style lang="scss">
.c-article-item {
  @apply p-14;
  border-bottom: 1px solid #000;
  border-radius: 5rem;
  @apply bg-gray-200 my-11;

  &__container {
    @apply bg-gray-50;
    border-radius: 5rem;
    padding: 5rem;
  }

  &__content {
    @apply flex flex-col;
  }

  &__title {
    font-size: #{"clamp(1.5rem, 2.4vw, 3rem)"};
    font-weight: 800;
  }
  &__excerpt {
    @apply w-full text-sm py-5;

    & em {
      @apply text-blue-700;
    }
  }

	&__source {
		@apply flex items-center justify-between py-9;
	}

  &__image {
    @apply w-16;
    margin-left: 10px;
  }

  &__footer {
    @apply flex flex-col;
  }

  .o-button {
    @apply py-2 px-4 bg-black text-blue-50 rounded-lg my-4;
  }

  @include t-media-query($s-medium-up) {
    @apply flex-row w-1/2 my-14;
    width: calc(50% - 2rem);
  }
}
</style>
