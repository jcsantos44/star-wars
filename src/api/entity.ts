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
    async getSubEntity(urls: string[]) {
        const r = request;
        await r.getResults(undefined, urls, undefined, undefined);
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
        console.log(str);
        str.pop();
        const id = str.pop();
        console.log(id);
        return id;
    },
    getImageUrl(id: number, entityType: string) {
        const endpoint = entityType === 'people' ? 'characters' : 'characters';
        const url = `https://starwars-visualguide.com/assets/img/${endpoint}/${id}.jpg`;
        return url;
    },
    async fetchPerson(param: number|object) {
        let person: any;
        console.log('param', param);
        if (typeof param === 'number') {
            person = await this.getEntity(param, 'people');
        } else if (typeof param === 'object') {
            person = param;
        }
        const homeworld = await this.getSubEntity([person.homeworld]);
        const films = await this.getSubEntity([...person.films]);
        const species = await this.getSubEntity([...person.species]);
        const vehicles = await this.getSubEntity([...person.vehicles]);
        const starships = await this.getSubEntity([...person.starships]);
        const imageUrl = await this.getImageUrl(person.id, 'people');
        console.log(imageUrl);
        const fullPerson = {
            ...person,
            homeworld,
            films,
            species,
            vehicles,
            starships,
            imageUrl,
        };
        return fullPerson;
    },
    async fetchStarship(id: number) {
        const ship = await this.getEntity(id, 'starship');
        const pilots = await this.getSubEntity([...ship.pilots]);
        const films = await this.getSubEntity([...ship.films]);
        const fullShip = {
            ...ship,
            pilots,
            films,
        };
        return fullShip;
    },
    async fetchPlanet(id: number) {
        const planet = await this.getEntity(id, 'planet');
        const residents = await this.getSubEntity([...planet.residents]);
        const films = await this.getSubEntity([...planet.films]);
        const fullPlanet = {
            ...planet,
            residents,
            films,
        };
        return fullPlanet;
    },
    async fetchVehicle(id: number) {
        const vehicle = await this.getEntity(id, 'vehicle');
        const pilots = await this.getSubEntity([...vehicle.pilots]);
        const films = await this.getSubEntity([...vehicle.films]);
        const fullVehicle = {
            ...vehicle,
            pilots,
            films,
        };
        return fullVehicle;
    },
    async fetchSpecies(id: number) {
        const species = await this.getEntity(id, 'species');
        const homeworld = await this.getSubEntity([...species.homeworld]);
        const people = await this.getSubEntity([...species.people]);
        const films = await this.getSubEntity([...species.films]);
        const fullSpecies = {
            ...species,
            homeworld,
            people,
            films,
        };
        return fullSpecies;
    },
    async fetchFilm(id: number) {
        const film = await this.getEntity(id, 'film');
        const people = await this.getSubEntity([...film.people]);
        const films = await this.getSubEntity([...film.films]);
        const planets = await this.getSubEntity([...film.planets]);
        const starships = await this.getSubEntity([...film.starships]);
        const vehicles = await this.getSubEntity([...film.vehicles]);
        const species = await this.getSubEntity([...film.species]);
        const fullFilm = {
            ...film,
            people,
            films,
            planets,
            starships,
            vehicles,
            species,
        };
        return fullFilm;
    },
};
export default entity;
