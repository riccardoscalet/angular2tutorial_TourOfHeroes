import {
    Injectable
} from '@angular/core';
import {
    Hero,
    HeroesMock
} from "./model/hero";

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HeroesMock);
    }
}