<template>
  <v-app>
    <core-toolbar id="top"/>
    <core-view/>
    <core-footer/>
  </v-app>
</template>

<script>
export default {
  mounted() {},
  components: {
    CoreFooter: () => import("@/components/core/Footer"),
    CoreToolbar: () => import("@/components/core/Toolbar"),
    CoreView: () => import("@/components/core/View")
  }
};
</script>
