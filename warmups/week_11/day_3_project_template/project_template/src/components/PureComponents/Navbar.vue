<template>
  <header class="c-navbar" :class="{ 'is-fixed': scrolled }">
    <nav class="c-navbar__items-container">
      <img
        class="c-navbar__image"
        :src="require('../../assets/img/streem_logo_black_transparent.png')"
        alt="streem logo"
      />
      <span
        class="c-navbar__icon o-icon is-mobile"
        @click="openNav"
        :class="{ 'is-open': isOpen }"
      ></span>
      <ul class="c-navbar__items" :class="{ 'is-open': isOpen }">
        <li class="c-navbar__item">
          <router-link to="/">{{ home }}</router-link>
        </li>
        <li class="c-navbar__item">
          <router-link to="/about">{{ about }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Constants from "../../store/modules/constants";
export default {
  name: "Navbar",
  data() {
    return {
      home: Constants.TEXT.HOME_LINK,
      about: Constants.TEXT.ABOUT_LINK,
      isOpen: false,
      scrolled: false,
    };
  },
  methods: {
    openNav: function () {
      this.isOpen = !this.isOpen;
    },
    navOnScroll: function () {
      this.scrolled = window.scrollY > 0;
    },
  },
  created() {
    window.addEventListener("scroll", this.navOnScroll);
  },
};
</script>

<style lang="scss">
.c-navbar {
  @apply flex bg-gray-50 h-16 justify-between items-center w-full;
  padding: $s-gutter--edge-mobile-alt;

  &.is-fixed {
    @apply fixed;
  }

  &__items {
    @apply flex ml-auto h-auto items-center absolute right-0 flex-col bg-gray-900 text-blue-50 w-full hidden;
    min-width: 7rem;
    top: 2.9rem;

    &.is-open {
      @apply flex;
      transition: $s-animation--default;
    }

    &-container {
      @apply relative w-full flex items-center;
    }
  }

  &__item {
    @apply p-4;
  }

  & .o-icon {
    @apply block relative w-6 h-1 ml-auto;

    &:after {
      @apply block absolute w-full h-full bg-gray-900;
      transition: all 0.2s ease-out;
      content: "";
      top: -0.313rem;
      right: $s-gutter--edge-mobile-alt;
    }

    &:before {
      @apply block absolute w-full h-full bg-gray-900;
      transition: all 0.2s ease-out;
      content: "";
      top: 0.313rem;
      right: $s-gutter--edge-mobile-alt;
    }
  }

  &__image {
    @apply w-28 h-auto;
  }

  @include t-media-query($s-medium-up) {
    padding: 0 $s-gutter--edge-xlarge;
    &__items {
      @apply bg-transparent static flex-row text-gray-900 w-auto flex;

      &-container {
        @apply static;
      }
    }
    &__item {
      & .router-link-exact-active {
        @apply bg-black text-blue-50;
        padding: 1.438rem;
      }
    }

    &__image {
      @apply w-40 h-auto;
    }

    & .o-icon {
      &.is-mobile {
        @apply hidden;
      }
    }
  }
}
</style>