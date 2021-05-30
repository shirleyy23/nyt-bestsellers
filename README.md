# NYT Bestsellers App

## About

An app for viewing [The New York Times Best Sellers](https://www.nytimes.com/books/best-sellers/) data. Users can toggle between the Fiction and Non-Fiction lists provided by the API, and click into each entry to view additional information.

The app utilizes serverless functions, and includes a GraphQL wrapper to accomodate for the original REST API in order to implement and leverage Apollo functionalities.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

DEMO: [https://nyt-bestsellers.netlify.app/](https://nyt-bestsellers.netlify.app/)

## Installing

Clone the repo:

```sh
git clone https://github.com/shirleyy23/nyt-bestsellers.git
cd nyt-bestsellers
npm install
```

Install netlify dev:

```sh
npm install netlify-cli -g
```

## Usage

```sh
netlify dev
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Built with

- [Angular](https://github.com/angular)
- [ngRx](https://github.com/ngrx)
- [Apollo Client](https://github.com/apollographql)
- [Apollo Angular](https://github.com/kamilkisiela/apollo-angular)
- [Netlify Lambda](https://github.com/netlify/netlify-lambda)
- [Angular Font Awesome Icons](https://github.com/FortAwesome/angular-fontawesome)

## License

This project is licensed under the MIT License.
