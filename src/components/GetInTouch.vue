<template>
  <section id="get-in-touch" class="hide-overflow">
    <v-layout _secondary white--text>
      <v-flex hidden-sm-and-down md6>
        <v-img
          :lazy-src="require('@/assets/logo1.png')"
          :src="require('@/assets/contact.png')"
          height="100%"
        />
      </v-flex>
      <v-flex xs12 md6 pa-5>
        <base-bubble-1/>
        <base-heading class="mb-5">Get In Touch</base-heading>
        <v-sheet max-width="600" color="transparent">
          <v-form ref="my_form" lazy-validation>
            <v-text-field color="info" :rules="rules.required" label="Name" solo flat/>
            <v-text-field color="info" :rules="rules.emailRules" label="Email" solo flat/>
            <v-text-field color="info" :rules="rules.required" label="Subject" solo flat/>
            <v-textarea color="info" :rules="rules.required" label="Message" solo flat/>
            <v-btn @click="validate" dark color="primary" rounded>
              Send
            </v-btn>
          </v-form>
        </v-sheet>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
export default {
  data() {
    return {
      hint: "This field is required.",
      email: "",
      subject: "",
      message: "",
      name: "",
      rules: {
        required: [
          v => !!v || this.hint,
          v => (v && v.length <= 10) || "Name must be less than 10 characters"
        ],
        emailRules: [
          v => !!v || this.hint,
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ]
      }
    };
  },
  methods: {
    validate() {
      if (this.$refs.my_form.validate()) {
        this.$emmiter.$emit("message_sent" , "Your message is being proccessed by our system.Please wait for our response. Thank you!")
      }
    }
  },

};
</script>

