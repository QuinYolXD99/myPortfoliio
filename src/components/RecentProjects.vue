<template>
  <section id="recent-projects" class="hide-overflow" hidden-sm-and-down>
    <v-layout hidden-sm-and-down>
      <v-flex xs12 md6 primary text-xs-center pa-5 white--text>
        <base-bubble-1 style="transform: rotate(180deg) translateX(25%)"/>
        <base-heading>Recent Projects</base-heading>

        <base-text class="mb-5">Here are some of my projects I've made.</base-text>

        <v-card color="secondary">
          <v-container grid-list-md pa-2>
            <v-layout wrap>
              <v-flex v-for="project in projects" :key="project" xs12 md6>
                <!-- <a href="#"> -->
                <v-img
                  @click="viewImage(`${project}.png`)"
                  :src="require(`@/assets/${project}.png`)"
                  max-height="350" 
                  aspect-ratio="2"
                />
                <!-- </a> -->
              </v-flex>
              <BaseImageModal ref="modal"/>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/recentprojects.png')" height="100%"/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  components: {
    BaseImageModal: () => import("@/components/base/Modal")
  },
  data: () => ({
    projects: ["project1", "project2", "project3", "project4"],
  }),
  methods: {
    viewImage(path) {
      this.$refs.modal.uri = path;
      this.$refs.modal.dialog = true;
    }
  }
};
</script>
