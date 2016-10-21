import {
    Component
} from '@angular/core';
import {
    Hero
} from "./model/hero";

@Component({
    selector: "my-app",
    templateUrl: "templates/heroList.html",
    styleUrls: ["styles/heroes.css"]
})

export class AppComponent {
    title = "Tour of Heroes";
    heroes = Heroes;
    selectedHero: Hero;

    selectHero(hero: Hero): void {
        this.selectedHero = hero;
    }
}

const Heroes: Hero[] = [{
    id: 1,
    name: "Banana God"
}, {
    id: 11,
    name: 'Mr. Nice'
}, {
    id: 12,
    name: 'Narco'
}, {
    id: 13,
    name: 'Bombasto'
}, {
    id: 14,
    name: 'Celeritas'
}, {
    id: 15,
    name: 'Magneta'
}, {
    id: 16,
    name: 'RubberMan'
}, {
    id: 17,
    name: 'Dynama'
}, {
    id: 18,
    name: 'Dr IQ'
}, {
    id: 19,
    name: 'Magma'
}, {
    id: 20,
    name: 'Tornado'
}];