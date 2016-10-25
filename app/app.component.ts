// Main application page

import {
    Component
} from '@angular/core';

// Defines html selector and corresponding html template that will replace it
@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html"
})

export class AppComponent {
    title = "Tour of Heroes";
}