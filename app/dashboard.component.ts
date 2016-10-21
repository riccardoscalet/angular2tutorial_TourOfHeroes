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
    providers: [HeroService]
})

export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 5));
    }

    gotoDetail(hero: Hero): void { /* not implemented yet */ }
}