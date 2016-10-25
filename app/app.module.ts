// Starting point of the application, called directly by main.ts.
// Bootstraps Angular2 application.  

// List of imported Angular2 modules.
import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';

// List of imported user defined components.
import {
    AppComponent
} from './app.component';
import {
    HeroesComponent,
} from './heroes.component';
import {
    DashboardComponent,
} from './dashboard.component';
import {
    HeroDetailComponent
} from "./hero-detail.component"


// Initializes main Angular2 module
@NgModule({
    // Imports all required Angular2 modules
    imports: [
        BrowserModule,
        FormsModule,
        // Route module: specifies route paths
        RouterModule.forRoot([{
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }, {
            path: 'heroes',
            component: HeroesComponent
        }, {
            path: 'dashboard',
            component: DashboardComponent
        }, {
            path: 'details/:id',
            component: HeroDetailComponent
        }]),
    ],
    // User defined modules
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent
    ],
    // Starting module
    bootstrap: [AppComponent]
})

export class AppModule {}