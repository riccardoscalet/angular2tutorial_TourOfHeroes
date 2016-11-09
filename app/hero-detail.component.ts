// Page listing the details of one hero.

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from "./model/hero";
import { HeroService } from "./hero.service";

@Component({
    moduleId: module.id,
    selector: "my-hero-detail",
    templateUrl: "./hero-detail.component.html",
    // Styles applied to this component
    styleUrls: ["../styles/hero-detail.component.css"],
    providers: [HeroService]
})

export class HeroDetailComponent implements OnInit {

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    // Input decorator adds the "watcher" to the valued, keeping it "synched" everywhere, including html.
    // The value can also be set from outside the component (in this case heroes.component.html)
    @Input()
    hero: Hero;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            // Symbol "+" converts to number.
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }
}