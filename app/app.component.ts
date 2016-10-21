import {
    Component
} from '@angular/core';

@Component({
    selector: "my-app",
    templateUrl: "templates/heroDetails.html"
})

export class AppComponent {
    title = "Tour of Heroes";
    hero: Hero = {
        id: 1,
        name: "Banana God"
    };
}

export class Hero {
    id: number;
    name: string;
}