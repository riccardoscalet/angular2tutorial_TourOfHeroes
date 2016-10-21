import {
    Component,
    OnInit
} from '@angular/core';
import {
    Hero
} from "./model/hero";
import {
    HeroService
} from "./hero.service";

@Component({
    selector: "my-app",
    templateUrl: "templates/heroList.html",
    styleUrls: ["styles/heroes.css"],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    title = "Tour of Heroes";
    heroes: Hero[];
    selectedHero: Hero;


    constructor(private heroService: HeroService) {}


    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    selectHero(hero: Hero): void {
        this.selectedHero = hero;
    }
}