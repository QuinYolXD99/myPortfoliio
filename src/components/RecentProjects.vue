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
              <v-flex v-for="(image , j) in images" :key="j+'j'" xs12 md6>
                <v-img
                  @click="viewImage(image , `project${j+1}.png`)"
                  :src="require(`@/assets/project${j+1}.png`)"
                  :lazy-src="require('@/assets/logo.png')"
                  max-height="350"
                  aspect-ratio="2"
                />
              </v-flex>
              <BaseImageModal ref="modal"/>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex hidden-sm-and-down md6>
        <v-img
          :src="require('@/assets/recentprojects.png')"
          :lazy-src="require('@/assets/logo1.png')"
          height="100%"
        />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  components: {
    BaseImageModal: () => import("@/components/base/Modal")
  },
  watch: {
    images() {
      return this.images;
    }
  },
  data: () => ({
    images: [
      {
        title: "EXPRESSDOCX",
        link: "https://github.com/yolXD24/vue-project",
        description:
          "A web application that is used to connect people to their LGU on claiming government documents"
      },
      {
        title: "Pizzamart",
        link: "https://github.com/ramedju1003/pizzamart_system",
        description:
          "A web application that is used to order pizza to local Pizza houses here in Cebu"
      },
      {
        title: "Reachout",
        link: null,
        description:
          "A reporting web application used to report OSEC cases here in Cebu"
      },
      {
        title: "Project GoCo",
        link: null,
        description:
          "A web social media-like application that is used to connect people to their LGU on their community concerns"
      }
    ],
    index: null
  }),
  methods: {
    viewImage(image, src) {
      this.$refs.modal.uri = src;
      this.$refs.modal.link = image.link;
      this.$refs.modal.title = image.title;
      this.$refs.modal.description = image.description;
      this.$refs.modal.dialog = true;
    }
  }
};
</script>
