// Apollo login page

import { Component, OnInit } from '@angular/core';

import { LoginService } from "./login.service";

@Component({
    moduleId: module.id,
    selector: "apollo-login",
    templateUrl: "login.component.html",
    styleUrls: ["../styles/login.component.css"],
    providers: [LoginService]
})

export class LoginComponent implements OnInit {
    username: string;
    password: string;
    result: string;

    constructor(private loginService: LoginService) {}


    ngOnInit(): void {};

    login(): void {
        this.loginService.login(this.username, this.password)
            .then(res => {
                this.result = res.json();
            })
            .catch(reason => {
                console.log(reason);
            });
    };

}