<template>
  <section id="welcome" class="hide-overflow">
    <v-layout>
      <v-flex hidden-sm-and-down md6>
        <v-img
          :lazy-src="require('@/assets/logo.png')"
          :src="require('@/assets/welcome.png')"
          height="100vh"
        />
      </v-flex>

      <v-flex
        xs12
        md6
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <base-bubble-1 style="transform: rotate(180deg) translateY(25%)"/>

        <v-layout align-center justify-center>
          <v-flex xs10 md9>
            <base-heading>Welcome!</base-heading>
            <base-text>
              Hi! My name is
              <b>Yol Torres</b> , and I am a junior Web Developer and a freelancer.I have diverse set of skills inline with the latest trends and technology , ranging from design to HTML + CSS + Javascript ,and also with Vue JS , React JS , all the way to PHP Laravel , Node JS and ASP.net.I enjoy building web applications from small business sites to rich interactive applications.If you are a business seeking for a web presence or any employer looking a developer to hire , you can get in touch with me here.
            </base-text>
            <a href="#get-in-touch">
              <base-btn class="mt-4">contact me</base-btn>
            </a>
          </v-flex>
        </v-layout>

        <base-bubble-2 style="transform: rotate(180deg) translate(-200px, -15%)"/>
      </v-flex>
    </v-layout>
  </section>
</template>
