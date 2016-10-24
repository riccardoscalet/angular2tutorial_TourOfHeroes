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
    // Styles applied to this component
    styleUrls: ["styles/heroes.css"]
})

export class HeroDetailComponent {
    // Input decorator allows to set this value from outside the component (in this case heroList.html)
    @Input()
    hero: Hero;
}