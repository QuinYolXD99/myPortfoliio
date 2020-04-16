<template>
  <div>
    <div class="mt-5 pt-4" v-if="$vuetify.breakpoint.smAndDown">
      <v-img
        :src="require(`@/assets/welcome.png`)"
        :lazy-src="require('@/assets/logo.png')"
        max-height="350"
        contain
      />
    </div>
    <welcome/>
    <v-divider v-if="$vuetify.breakpoint.smAndDown"></v-divider>
    <recent-projects/>
    <v-divider v-if="$vuetify.breakpoint.smAndDown"></v-divider>
    <services/>
    <v-divider v-if="$vuetify.breakpoint.smAndDown"></v-divider>
    <about-me/>
    <v-divider v-if="$vuetify.breakpoint.smAndDown"></v-divider>
    <get-in-touch/>
  </div>
</template>

<script>
export default {
  components: {
    AboutMe: () => import("@/components/AboutMe"),
    GetInTouch: () => import("@/components/GetInTouch"),
    RecentProjects: () => import("@/components/RecentProjects"),
    Services: () => import("@/components/Services"),
    Welcome: () => import("@/components/Welcome")
  }
};
</script>
