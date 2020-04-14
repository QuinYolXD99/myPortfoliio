<template>
   <v-footer class="justify-center" color="#292929" height="50">
      <div
        class="caption font-weight-light grey--text text--lighten-1 text-center"
      >&copy; {{ (new Date()).getFullYear() }} — Made with 💜 by Yol Torres</div>
      <a href="#" class="text-left">
        <v-icon color="secondary">mdi-arrow-up-circle</v-icon>
      </a>
    </v-footer>
</template>

<script>
export default {
  components: {
    SocialMedia: () => import('@/components/SocialMedia')
  }
}
</script>
