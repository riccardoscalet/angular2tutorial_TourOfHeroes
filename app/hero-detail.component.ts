import {
    Component,
    Input
} from '@angular/core';
import {
    Hero
} from "./model/hero";

@Component({
    selector: 'my-hero-detail',
    templateUrl: "templates/heroDetails.html",
    styleUrls: ["styles/heroes.css"]
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}