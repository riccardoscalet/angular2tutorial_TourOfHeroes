// Dashboard page

import {
    Component,
    OnInit
} from '@angular/core';

import {
    Hero
} from './model/hero';
import {
    HeroService
} from './hero.service';

@Component({
    selector: "my-dashboard",
    templateUrl: "templates/heroDashboard.html",
    // Services that can be used by this component
    providers: [HeroService]
})

// Definition of component: variables, functions, etc.
export class DashboardComponent {
    heroes: Hero[] = [];

    // Component contructor.
    // HeroService is automatically injected by Angular2.
    constructor(private heroService: HeroService) {}

    // Function called when component construction has been completed.
    ngOnInit(): void {
        // Usage of promises (returned by getHeroes function)
        this.heroService.getHeroes()        
            .then(heroes => this.heroes = heroes.slice(0, 5));
    }

    gotoDetail(hero: Hero): void { /* not implemented yet */ }
}