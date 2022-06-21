<template>
    <v-container>
        <v-overlay :value='loading' absolute>
            <v-progress-circular
                indeterminate
                size='64'
            ></v-progress-circular>
        </v-overlay>
        <v-row>
            <v-col
                v-for='(item, index) in items'
                :key='index'
                cols='12'
                sm='6'
                md='6'
                lg='3'
                xl='3'
            >
                <v-hover v-slot='{ hover }'>
                    <v-card
                        :elevation='hover ? 16 : 2'
                        :style='hover ? "transform: scale(1.02)" : "transform: scale(1)"'
                        @click='openItem(item)'
                    >
                        <v-img
                            :src='item.imageUrl'
                            min-height = '300px'
                            class='white--text align-end'
                            gradient='to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'
                        >
                            <v-card-title>{{`${item.name ? item.name : item.title}`}}</v-card-title>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <div class='text-center py-10'>
            <v-pagination
                v-if='!loading'
                v-model='page'
                :length='numberOfPages'
                prev-icon='mdi-menu-left'
                next-icon='mdi-menu-right'
                @input='getItems'
            ></v-pagination>
        </div>
    </v-container>
</template>

<script lang="ts">
/* eslint-disable vue/valid-v-slot */
import { Component, Vue, Watch } from 'vue-property-decorator';
import { swapi } from '@/api/swapi';

const Props = Vue.extend({
});

@Component({})
export default class AppDataTable extends Props {
    /* data */
    loading = false;
    // items: Record<string, never>|undefined = {};
    items: Record<string, never>|undefined = {};
    page = 1;
    itemsPerPage = 10;
    numberOfPages = 1;
    entityType = this.$route.params.entityType;

    mounted() {
        this.getItems();
    }

    async getItems() {
        this.loading = true;
        let list;
        try {
            list = await swapi.getList(this.page, this.entityType);
            this.items = list.results;
            this.numberOfPages = Math.floor(list.count / 10);
        } finally {
            this.loading = false;
            this.$emit('finish-loading');
        }
        return list.results;
    }

    openItem(item: any) {
        this.$router.push({ name: 'details', params: { id: String(swapi.getIdFromUrl(item.url)), entityType: this.entityType } });
    }

    formatKeyString(str: string) {
        const formatted = str.replace('_', ' ');
        return `${formatted[0].toUpperCase() + formatted.slice(1)}`;
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
