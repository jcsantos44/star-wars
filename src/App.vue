<template>
    <v-app>
        <v-app-bar
            app
            prominent
            clipped-left
            :src='require("./assets/app-bar.jpg")'
        >
            <v-app-bar-nav-icon v-if='isMobile' dark @click='drawer = !drawer'>
            </v-app-bar-nav-icon>
            <v-img :src='require("./assets/logo.png")'
                   alt='logo'
                   contain
                   max-height='130px'/>
        </v-app-bar>
        <v-navigation-drawer
            v-model='drawer'
            app
            clipped
            :permanent='!isMobile'
            :mini-variant='!isMobile'
            :expand-on-hover='!isMobile'
        >
            <v-list
                nav
            >
                <v-list-item link :to='{ name:"list", params: { entityType: "people" } }'>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>People</v-list-item-title>
                </v-list-item>
                <v-list-item link :to='{ name:"list", params: { entityType: "starships" } }'>
                    <v-list-item-icon>
                        <v-icon>mdi-airplane</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Starships</v-list-item-title>
                </v-list-item>
                <v-list-item link :to='{ name:"list", params: { entityType: "planets" } }'>
                    <v-list-item-icon>
                        <v-icon>mdi-earth</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Planets</v-list-item-title>
                </v-list-item>
                <v-list-item link :to='{ name:"list", params: { entityType: "species" } }'>
                    <v-list-item-icon>
                        <v-icon>mdi-star</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Species</v-list-item-title>
                </v-list-item>
                <v-list-item link :to='{ name:"list", params: { entityType: "films" } }'>
                    <v-list-item-icon>
                        <v-icon>mdi-filmstrip</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Films</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main class='pt-16'>
            <router-view :key='$route.path' />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class App extends Vue {
    drawer = false;

    get isMobile() {
        return this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm';
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
