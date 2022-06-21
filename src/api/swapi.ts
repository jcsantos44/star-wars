import { entity } from './entity';

export const swapi = {
    getList: (page: number, entityType: string) => entity.fetchEntityList(page, entityType),
    getPerson: (param: number|object) => entity.fetchPerson(param),
    getStarship: (id: number) => entity.fetchStarship(id),
    getFilm: (id: number) => entity.fetchFilm(id),
    getIdFromUrl: (url: string) => entity.getIdFromUrl(url),
    getImageUrl: (id:number, entityType: string) => entity.getImageUrl(id, entityType),
};
export default swapi;
