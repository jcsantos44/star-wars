<template>
    <v-card elevation='0'>
        <v-overlay :value='loading' absolute>
            <v-progress-circular
                indeterminate
                size='64'
            ></v-progress-circular>
        </v-overlay>
        <v-container>
            <v-row>
                <v-col>
                    <v-card v-if='!isMobile' dark elevation='12' class='mt-5' style='background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))'>
                        <div class='d-flex flex-no-wrap justify-space-between'>
                            <v-row dense class='justify-content-start ml-1 text-justify'>
                                <v-col>
                                    <v-card-title
                                        class='text-h5 ml-0'
                                    >
                                        {{ item.name }}
                                    </v-card-title>
                                    <v-divider></v-divider>
                                </v-col>
                                <template
                                    v-for='(key, index) in Object.keys(item)'
                                >
                                    <v-col
                                        v-if='!ignore(key)'
                                        :key='index'
                                        sm='12'
                                    >
                                        {{ formatKeyString(key) }}: {{ item[key] }}
                                    </v-col>
                                </template>
                            </v-row>

                            <v-avatar
                                class='ma-2'
                                size='300'
                                rounded
                            >
                                <v-img
                                    :src='item.imageUrl'
                                    gradient='to bottom, rgba(0,0,0,.2), rgba(0,0,0,.0)'
                                ></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                    <v-card v-else dark elevation='12' class='pa-0' style='background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))'>
                        <v-col class='pa-0  text-center'>
                            <v-img
                                :src='item.imageUrl'
                                gradient='to bottom, rgba(0,0,0,.2), rgba(0,0,0,.0)'
                                class='ma-0 rounded'
                            ></v-img>
                            <div
                                class='text-h5 py-2 text-center'
                            >
                                {{ item.name }}
                            </div>
                        </v-col>
                        <v-divider></v-divider>
                        <template
                            v-for='(key, index) in Object.keys(item)'
                        >
                            <v-col
                                v-if='!ignore(key)'
                                :key='index'
                            >
                                {{ formatKeyString(key) }}: {{ item[key] }}
                            </v-col>
                        </template>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-overlay :value='loading' absolute>
                <v-progress-circular
                    indeterminate
                    size='64'
                ></v-progress-circular>
            </v-overlay>
            <!-- <v-container> -->
            <v-row>
                <template v-for='(subentity, k) in item.subentities'>
                    <v-col
                        v-if='subentity && subentity.length > 0'
                        :key='k'
                        sm='12'
                        md='12'
                        lg='6'
                        xl='4'
                    >
                        <v-card class='pa-1' style='background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5))' dark>
                            <div class='ma-2 text-h5'>
                                {{formatKeyString(k)}}
                            </div>
                            <v-divider></v-divider>
                            <v-container>
                                <v-row dense>
                                    <v-col
                                        v-for='(element, i) in subentity'
                                        :key='i'
                                        cols='12'
                                    >
                                        <v-hover v-slot='{ hover }'>
                                            <v-card
                                                :elevation='hover ? 16 : 2'
                                                :style='hover ? "transform: scale(1.02)" : "transform: scale(1)"'
                                                dark
                                                @click='openItem(element, subentity)'
                                            >
                                                <div class='d-flex flex-no-wrap justify-space-between'>
                                                    <div>
                                                        <v-card-subtitle>{{`${element.name ? element.name : element.title}`}}</v-card-subtitle>
                                                    </div>

                                                    <v-avatar
                                                        class='ma-0'
                                                        size='125'
                                                        rounded
                                                    >
                                                        <v-img
                                                            :src='element.imageUrl'
                                                            gradient='to bottom, rgba(0,0,0,.3), rgba(0,0,0,.1)'></v-img>
                                                    </v-avatar>
                                                </div>
                                            </v-card>
                                        </v-hover>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </template>
            </v-row>
            <!-- </v-container> -->
        </v-container>
    </v-card>
</template>

<script lang="ts">
/* eslint-disable vue/valid-v-slot */
import { Component, Vue } from 'vue-property-decorator';
import { swapi } from '@/api/swapi';

@Component({
})
export default class AppDataTable extends Vue {
    item: any = {};
    entityId = Number(this.$route.params.id);
    entityType = this.$route.params.entityType;
    loading = false;

    async mounted() {
        this.item = await this.getItem();
    }

    async getItem() {
        this.loading = true;
        try {
            if (this.entityType === 'people') {
                const results = await swapi.getPerson(this.entityId);
                return results;
            }
            if (this.entityType === 'starships') {
                const results = await swapi.getStarship(this.entityId);
                return results;
            }
            if (this.entityType === 'species') {
                const results = await swapi.getSpecies(this.entityId);
                return results;
            }
            if (this.entityType === 'films') {
                const results = await swapi.getFilm(this.entityId);
                return results;
            }
            if (this.entityType === 'vehicles') {
                const results = await swapi.getVehicle(this.entityId);
                return results;
            }
            if (this.entityType === 'planets') {
                const results = await swapi.getPlanet(this.entityId);
                return results;
            }
            return swapi.getPerson(this.entityId);
        } finally {
            this.loading = false;
        }
    }
    formatKeyString(str: string) {
        const formatted = str.replace('_', ' ');
        return `${formatted[0].toUpperCase() + formatted.slice(1)}`;
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
            'pilots',
            'subentities',
            'characters',
            'planets',
            'residents',
        ];
        return keysToIgnore.includes(key);
    }
    get isMobile() {
        return this.$vuetify.breakpoint.name === 'xs';
    }
    isArray(value: any) {
        return Array.isArray(value);
    }
    openItem(e: any, subentity: any) {
        this.$router.push({ name: 'details', params: { id: String(swapi.getIdFromUrl(e.url)), entityType: swapi.getEntityTypeFromUrl(e.url) } });
    }
}
</script>;

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
