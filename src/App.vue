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
    <v-snackbar v-model="snackbar" multi-line :timeout="timeout">
      {{ text }}
      <v-btn color="primary" small text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
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
      isLoading: true, //!this.$vuetify.breakpoint.smAndDown ? true : false,
      snackbar: false,
      text: "",
      timeout: 3000
    };
  },
  methods: {
    notify(message){
      this.snackbar = true;
      this.text = message;
    }
  },
  mounted() {
    this.$emmiter.$on("message_sent", (message) => {
      this.notify(message)
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  }
};
</script>
