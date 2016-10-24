// Service that can be injected and used by multiple components. 

import {
    Injectable
} from '@angular/core';
import {
    Hero,
    HeroesMock
} from "./model/hero";

// Defines the service as injectable. It will be automatically injected in constructors.
@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        // This method returns a promise.
        return Promise.resolve(HeroesMock);
    }
}