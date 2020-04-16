<template>
  <v-toolbar
    v-scroll="onScroll"
    app
    v-bind:class="[semiTransparentClass, (!isTransparent || $vuetify.breakpoint.smAndDown) ? coloredClass : '']"
    :flat="isTransparent && !$vuetify.breakpoint.smAndDown"
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
a {
  text-decoration: none;
  text-decoration-color: none !important;
  color: black;
}
</style>

<script>
export default {
  data: () => ({
    isTransparent: true,
    semiTransparentClass: "semi-transparent",
    coloredClass: "colored"
  }),
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "220px";
        case "sm":
          return "400px";
        case "md":
          return "500px";
        case "lg":
          return "600px";
        case "xl":
          return "800px";
      }
    }
  },
  methods: {
    onScroll() {
      this.isTransparent = window.pageYOffset < 200;
    }
  }
};
</script>
