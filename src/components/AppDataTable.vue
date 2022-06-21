<template>
    <div>
        <v-row dense>
            <v-col
                v-for='(item, index) in items'
                :key='index'
                cols='12'
            >
                <v-hover v-slot='{ hover }'>
                    <v-card
                        :elevation='hover ? 16 : 2'
                        :style='hover ? "transform: scale(1.02)" : "transform: scale(1)"'
                        class='transition-swing'
                        @click='openItem(item)'
                    >
                        <v-img
                            dark
                            src='https://media.contentapi.ea.com/content/dam/ea/walrus/characters/luke/hero/luke-skywalker-hero-xlg.jpg.adapt.crop16x9.1023w.jpg'
                            max-height='150'
                            gradient='to bottom left, rgba(100,100,100,.9), rgba(0,0,0,.8)'
                        >
                            <div class='d-flex flex-no-wrap justify-space-between'>
                                <div>
                                    <v-card-title
                                        class='text-h5'
                                        v-text='item.name'
                                    ></v-card-title>
                                    <v-card-text>
                                        <v-row>
                                            <v-col class='d-flex flex-wrap-reverse'>
                                                <template v-for='(key, index) in Object.keys(item)'>
                                                    <v-chip
                                                        v-if='!ignore(key)'
                                                        :key='index'
                                                        class='ma-1'
                                                    >
                                                        {{formatKeyString(key)}}: {{item[key]}} <br>
                                                    </v-chip>
                                                </template>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </div>
                                <v-avatar
                                    size='150'
                                    position='center bottom'
                                    tile
                                    contain
                                >
                                    <v-img
                                        :src='item.imageUrl'></v-img>
                                </v-avatar>
                            </div>
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
    </div>
</template>

<script lang="ts">
/* eslint-disable vue/valid-v-slot */
import { Component, Vue } from 'vue-property-decorator';
import { swapi } from '@/api/swapi';

@Component({
})
export default class AppDataTable extends Vue {
    /* data */
    loading = false;
    items: Record<string, never>|undefined = {};
    page = 1;
    itemsPerPage = 10;
    show = [];
    numberOfPages = 1;
    entityType = 'people';

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
    }

    openItem(item: any) {
        console.log(item.url);
    }

    ignore(key: any) {
        const keysToIgnore = [
            'name',
            'films',
            'people',
            'species',
            'homeworld',
            'vehicles',
            'starships',
            'url',
            'created',
            'imageUrl',
            'edited',
        ];
        return keysToIgnore.includes(key);
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
