<template>
  <section id="services" class="hide-overflow">
    <v-layout>
      <v-flex hidden-sm-and-down md6>
        <v-img
          :lazy-src="require('@/assets/logo.png')"
          :src="require('@/assets/services.png')"
          height="100%"
        />
      </v-flex>
      <v-flex xs12 md6 text-xs-center pa-4>
        <v-layout align-center justify-center fill-height wrap>
          <v-flex xs12>
            <base-bubble-2 style="transform: translateX(55%)"/>
            <base-heading class="black--text">Services</base-heading>

            <base-text class="mb-5">Here are some of my services offered.</base-text>
          </v-flex>
          <v-flex v-for="(service, i) in services" :key="i" md6 text-left mb-3>
            <v-card class="mx-1 px-3 py-3" hover>
              <br>
              <v-avatar class="elevation-0 mb-2" color="secondary" size="80">
                <v-icon color="white" size="40" v-text="service.icon"/>
              </v-avatar>
              <base-text>
                <div class="mb-2" v-text="service.name"/>
                <div class="body-1 mr-2" v-html="service.languages"/>
              </base-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        name: "Frontend Development",
        icon: "mdi-monitor",
        languages:
          "Languages used : Vue Js , HTML , CSS , Bootstrap , Material Design."
      },
      {
        name: "Backend Development",
        icon: "mdi-code-braces",
        languages: "Languages used : Node Js , Express Js , ASP.NET, PHP Laravel."
      },
      {
        name: "Database Management",
        icon: "mdi-database",
        languages: "Languages used : MySQl , Microsoft SqlServer ,MongoDB"
      },
      {
        name: "Programming",
        icon: "mdi-code-tags",
        languages: "Languages used : Python , Java , C# , Javascript"
      }
    ]
  })
};
</script>
