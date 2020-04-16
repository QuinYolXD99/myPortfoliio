<template>
  <v-app>
    <div v-if="isLoading">
      <v-fade-transition>
        <PreloadScreen/>
      </v-fade-transition>
    </div>
    <div v-else>
      <core-toolbar id="top"/>
      <core-view/>
      <core-footer/>
    </div>
  </v-app>
</template>

<script>
export default {
  components: {
    CoreFooter: () => import("@/components/core/Footer"),
    CoreToolbar: () => import("@/components/core/Toolbar"),
    CoreView: () => import("@/components/core/View"),
    PreloadScreen: () => import("@/components/PreloadScreen")
  },

  data() {
    return {
      isLoading: true //!this.$vuetify.breakpoint.smAndDown ? true : false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  }
};
</script>
