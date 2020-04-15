<template>
  <v-dialog overlay-opacity="1" class="px-10 py-10" v-model="dialog" max-width="1000">
    <v-card class="px-10 py-10">
      <v-card-text>
        <v-card-title class="headline font-weight-bold secondary--text">
          <v-divider outset width="20%"></v-divider>
          <span class="mx-2">{{title}}</span>
          <v-divider outset width="20%"></v-divider>
        </v-card-title>
        <span
          class="subtitle-1 font-italic font-weight-medium"
          inset
          style="text-indent:1em!important"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-{{description}}.</span>
        <br>
        <span
          class="subtitle-1 secondary--text font-italic font-weight-medium"
          inset
          v-if="link!=null"
          style="text-indent:1em!important"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Github link : <a class="indigo--text darken-4" :href="link" target="_blank">{{link}}</a>.</span>
        <v-card-text>
          <v-img class="modal-content" :src="require('@/assets/'+uri)"/>
        </v-card-text>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      uri: "logo.png",
      title: "",
      description: "",
      link: null
    };
  }
};
</script>
