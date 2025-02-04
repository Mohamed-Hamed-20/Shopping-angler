# JSON Data Fetching

This project demonstrates how to fetch and display data from a JSON file using Angular.

## Features

- **Fetch Data**: Fetch product data from a JSON file.
- **Display Product Details**: Display product details including image, title, description, price, and stock status.
- **Price Conversion**: Convert product prices from USD to EGP using a custom pipe.
- **Star Rating**: Display a star rating for each product.

## Components

- **ProductListComponent**: The parent component that fetches and manages the product data.
- **ProductCardComponent**: Displays individual product details.


## Clone the Repository:
   ```bash
   git clone https://github.com/3b3zeem/JSON-Data-Fetching-Angular
   cd <repository-folder>
   ```


## Install Dependencies:
   ```bash
   npm install
   ```


## Development server

To start a local development server, run:

   ```bash
   ng serve
   ```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


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

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
