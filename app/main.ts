// Entry point of the application (defined in systemjs.config.js).

// Imports required for TypeScript to work with Angular2
import "zone.js";
import "reflect-metadata";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);