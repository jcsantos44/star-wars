/* eslint-disable @typescript-eslint/no-empty-function */
import { request } from './request';

export const entity = {
    endpoint: 'people',
    baseImageUrl: 'https://starwars-visualguide.com/assets/img/',
    async getEntities(page: number|undefined, entityType: string) {
        const r = request;
        r.endpoint = entityType;
        r.page = page || 1;
        await r.getResults(undefined, undefined, undefined, page);
        return r.results;
    },
    async getEntity(id: number, entityType: string) {
        const r = request;
        r.endpoint = entityType;
        await r.getResults(undefined, undefined, id, undefined);
        return r.results;
    },
    async getSubEntity(urls: string[], entityType: string) {
        const r = request;
        await r.getResults(undefined, urls, undefined, undefined);
        r.results.forEach((e: any) => {
            const id = this.getIdFromUrl(e.url);
            const imageUrl = this.getImageUrl(Number(id), entityType);
            e.imageUrl = imageUrl;
        });
        return r.results;
    },
    async fetchEntityList(page: number, entityType: string) {
        const entityList = await this.getEntities(page, entityType);
        entityList.results.forEach((e: any) => {
            const id = this.getIdFromUrl(e.url);
            const imageUrl = this.getImageUrl(Number(id), entityType);
            e.imageUrl = imageUrl;
        });
        return entityList;
    },
    getIdFromUrl(url: string) {
        const str: string[] = url.split('/');
        str.pop();
        const id = str.pop();
        return id;
    },
    getEntityTypeFromUrl(url: string) {
        const str: string[] = url.split('/');
        return str[str.length - 3];
    },
    getImageUrl(id: number, entityType: string) {
        const endpoint = entityType === 'people' ? 'characters' : entityType;
        const url = `https://starwars-visualguide.com/assets/img/${endpoint}/${id}.jpg`;
        return url;
    },
    async fetchPerson(param: number|object) {
        let person: any;
        if (typeof param === 'number') {
            person = await this.getEntity(param, 'people');
        } else if (typeof param === 'object') {
            person = param;
        }
        const homeworld = await this.getSubEntity([person.homeworld], 'planets');
        const films = await this.getSubEntity([...person.films], 'films');
        const species = await this.getSubEntity([...person.species], 'species');
        const vehicles = await this.getSubEntity([...person.vehicles], 'vehicles');
        const starships = await this.getSubEntity([...person.starships], 'starships');
        const id = this.getIdFromUrl(person.url);
        const imageUrl = await this.getImageUrl(Number(id), 'people');
        const fullPerson = {
            ...person,
            subentities: {
                homeworld,
                species,
                films,
                vehicles,
                starships,
            },
            imageUrl,
        };
        return fullPerson;
    },
    async fetchStarship(id: number) {
        const ship = await this.getEntity(id, 'starships');
        const pilots = await this.getSubEntity([...ship.pilots], 'people');
        const films = await this.getSubEntity([...ship.films], 'films');
        const imageUrl = await this.getImageUrl(Number(id), 'starships');
        const fullShip = {
            ...ship,
            subentities: {
                pilots,
                films,
            },
            imageUrl,
        };
        return fullShip;
    },
    async fetchPlanet(id: number) {
        const planet = await this.getEntity(id, 'planets');
        const residents = await this.getSubEntity([...planet.residents], 'people');
        const films = await this.getSubEntity([...planet.films], 'films');
        const imageUrl = await this.getImageUrl(Number(id), 'planets');
        const fullPlanet = {
            ...planet,
            subentities: {
                residents,
                films,
            },
            imageUrl,
        };
        return fullPlanet;
    },
    async fetchVehicle(id: number) {
        const vehicle = await this.getEntity(id, 'vehicle');
        const pilots = await this.getSubEntity([...vehicle.pilots], 'people');
        const films = await this.getSubEntity([...vehicle.films], 'films');
        const imageUrl = await this.getImageUrl(Number(id), 'vehicles');
        const fullVehicle = {
            ...vehicle,
            subentities: {
                pilots,
                films,
            },
            imageUrl,
        };
        return fullVehicle;
    },
    async fetchSpecies(id: number) {
        const species = await this.getEntity(id, 'species');
        let homeworld;
        if (species?.homeworld) {
            homeworld = await this.getSubEntity([species.homeworld], 'planets');
        }
        const people = await this.getSubEntity([...species.people], 'people');
        const films = await this.getSubEntity([...species.films], 'films');
        const imageUrl = await this.getImageUrl(Number(id), 'species');
        const fullSpecies = {
            ...species,
            subentities: {
                homeworld,
                people,
                films,
            },
            imageUrl,
        };
        return fullSpecies;
    },
    async fetchFilm(id: number) {
        const film = await this.getEntity(id, 'films');
        const people = await this.getSubEntity([...film.characters], 'people');
        const planets = await this.getSubEntity([...film.planets], 'planets');
        const starships = await this.getSubEntity([...film.starships], 'starships');
        const vehicles = await this.getSubEntity([...film.vehicles], 'vehicles');
        const species = await this.getSubEntity([...film.species], 'species');
        const imageUrl = await this.getImageUrl(Number(id), 'films');
        const fullFilm = {
            ...film,
            subentities: {
                people,
                planets,
                starships,
                vehicles,
                species,
            },
            imageUrl,
        };
        return fullFilm;
    },
};
export default entity;
