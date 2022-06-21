import { entity } from './entity';

export const swapi = {
    empty: 'asdf',
    getList: (page: number, entityType: string) => entity.fetchEntityList(page, entityType),
    getPerson: (id: number) => entity.fetchPerson(id),
    getStarship: (id: number): any => entity.fetchStarship(id),
    getFilm: (id: number) => entity.fetchFilm(id),
    getSpecies: (id: number) => entity.fetchSpecies(id),
    getPlanet: (id: number) => entity.fetchPlanet(id),
    getVehicle: (id: number) => entity.fetchVehicle(id),
    getIdFromUrl: (url: string) => entity.getIdFromUrl(url),
    getEntityTypeFromUrl: (url: string) => entity.getEntityTypeFromUrl(url),
    getImageUrl: (id: number, entityType: string) => entity.getImageUrl(id, entityType),
};
export default swapi;
