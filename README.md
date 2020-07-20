# PeachtreeBank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Will Serve the app in English language.

Run `npm run start:fr`
Will serve the app in French language.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Will build the app for English language.

Run `npm run build:fr`
Will build the app for French language.

Note:
If need to build for all the supported languages, then need to change a setting in angular.json file. Add following
## "localize": true, in projects.peachtree-bank.architect.build.options -- line 27
Then Run `npm run build` to build the application for all supported languages.
The previous setting should be removed as it will not make the `npm start` to work.


## Build for Production
Run `npm run build --prod`.

## Build for Production - GitHub
npm run build --prod --base-href="https://{githubusername}.github.io/{githubrepositoryname}/"

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
