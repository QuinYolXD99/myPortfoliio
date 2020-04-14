<!--<template>
  <div id="myModal" ref="modal" class="modal py-10 mt-10">
    <v-img class="modal-content" :src="require('@/assets/'+uri)"/>
    <template v-slot:activator="{ on }">
         <base-btn @click="hideModal()">close</base-btn>
    </template>
   
  </div>
</template>
<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  margin: auto;
  display: block;
}

.modal-content {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      uri: "logo.png"
    };
  },
  methods: {
    hideModal() {
      var modal = this.$refs.modal;
      console.log(modal);
      this.$refs.modal.style.display = "none";
    },
    toggleModal() {
      var modal = this.$refs.modal;
      this.$refs.modal.style.display = "block";
    }
  }
};
</script>
-->

<template>
  <v-dialog overlay-opacity="1" class="px-10 py-10" v-model="dialog" max-width="1000">
    <v-card class="px-10 py-10">
      <v-img class="modal-content" :src="require('@/assets/'+uri)"/>
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
      uri: "logo.png"
    };
  }
};
</script>
