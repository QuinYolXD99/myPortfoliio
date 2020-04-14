<template>
  <v-toolbar
    v-scroll="onScroll"
    app
    v-bind:class="[semiTransparentClass, (!isTransparent) ? coloredClass : '']"
    :flat="isTransparent"
  >
    <img
      :src="require(isTransparent?'@/assets/logo1.png':'@/assets/logo.png')"
      alt="logo"
      aspect-ratio="1.5"
      height="60%"
      contain
    >

      <v-toolbar-title class="headline text-uppercase">My Portfolio</v-toolbar-title>
    <v-spacer/>
  </v-toolbar>
</template>
<style>
.semi-transparent {
  background-color: rgba(255, 255, 255, 0) !important;
  color: white !important;
}
.colored {
  background-color: #f5f5f5 !important;
  color: black !important;
}
a{
  text-decoration: none;
  text-decoration-color: none!important;
  color: black
}
</style>

<script>
export default {
  data: () => ({
    isTransparent: true,
    semiTransparentClass: "semi-transparent",
    coloredClass: "colored"
  }),

  methods: {
    onScroll() {
      this.isTransparent = window.pageYOffset < 200;
    }
  }
};
</script>
