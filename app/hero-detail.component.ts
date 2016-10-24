// Page listing the details of one hero.

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
    // Input decorator adds the "watcher" to the valued, keeping it "synched" everywhere, including html.
    // The value can also be set from outside the component (in this case heroList.html)
    @Input()
    hero: Hero;
}