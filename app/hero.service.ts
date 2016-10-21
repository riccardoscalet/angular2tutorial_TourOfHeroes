import {
    Injectable
} from '@angular/core';
import {
    Hero,
    HeroesMock
} from "./model/hero";

@Injectable()
export class HeroService {
    getHeroes(): Hero[] {
        return HeroesMock;
    }
}