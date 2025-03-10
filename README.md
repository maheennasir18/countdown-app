# CountdownApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Mock server

To set up and start a mock server perform following:
In order to call your own mock server for API call, run:

```bash
npm install -g json-server
```

Create a db.json and add mock response in file and run:

```bash
json-server --watch db.json --port 3000
```

Once the server is running, open your browser and navigate to `http://localhost:3000/`. This will load mock response.

In order to call API from a specific route e.g. /api/deadline, perform following steps:

1. Create a proxy.config.json file 
2. Update build.configs in angular. json
3. Run command to start application (Make sure json server is already up and running)

```bash
ng serve --proxy-config proxy.conf.json
```
OR

```bash
npm run startProxy
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
