<template>
  <div id="screen">
    <v-layout fill-height>
      <v-flex text-xs-center pa-5 black--text>
        <base-bubble-1 style="transform: rotate(180deg) translateX(20%)"/>
        <!-- <base-text class="mb-5">loading some resources...</base-text> -->
        <v-container grid-list-md pa-2>
          <v-layout wrap>
            <v-flex>
              <v-img
                :src="require(`@/assets/logo.png`)"
                alt="logo"
                aspect-ratio="1.5"
                height="200"
                contain
                v-bind:class="['', ($vuetify.breakpoint.smAndDown) ? 'mobile_img' : '']"
                id="img"
              />
              <div
                v-bind:class="['', (!$vuetify.breakpoint.smAndDown) ? 'progress px-5 mx-5 mt-5' : '']"
              >
                <v-progress-linear indeterminate color="primary" rounded mx-5></v-progress-linear>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>
<style scoped>
#screen {
  height: 100vh !important;
}
.progress {
  padding: 0 30em !important;
}
.mobile_img {
  margin-top: 6em !important;
}

</style>

<script>
export default {
};
</script>
