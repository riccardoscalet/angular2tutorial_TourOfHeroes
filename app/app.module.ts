// Starting point of the application, called directly by main.ts.
// Bootstraps Angular2 application.  

// List of imported Angular2 modules.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// List of imported user defined components.
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent, } from './dashboard.component';
import { HeroDetailComponent } from "./hero-detail.component"

// Module where all routes are defined.
import { AppRoutingModule } from './app-routing.module';


// Initializes main Angular2 module
@NgModule({
    // Imports all required Angular2 modules
    imports: [
        BrowserModule,
        FormsModule,
        // Route module: sets route paths
        AppRoutingModule
    ],
    // Component modules
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