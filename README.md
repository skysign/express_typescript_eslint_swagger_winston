# Express + Typescript + ESLint + Swagger + Winston
This is starter template of express, typescript, eslint, swagger, winston, to be best practice for using these packages, with good default configuration.

* [Express](https://expressjs.com)
* [Typescript](https://www.typescriptlang.org)
* [ESLint](https://eslint.org/)
* [Swagger](https://swagger.io/)
* [Winston](https://github.com/winstonjs/winston)
* [Jest](https://jestjs.io/)
* [yarn](https://yarnpkg.com/) we use yarn instead of npm,

# Features
- Implemented by Typescript and Eslint is enabled, also
- Two get/post endpoints are documented by Swagger, and they work, actually
- Log saved by using Winston, and logs are kept during two months, and then they are removed, automatically
- Instead of npm, yarn is used for safety.

# How to run
To install yarn, there are few ways, but, probably, you have npm, let's leverage it.
```
$ npm install --global yarn
```

Now, install all of dependant packages.
```
$ yarn install
```

Run :)
```
$ yarn run dev
```

Please visit all of addresses belows as they are working, now.
- http://localhost:3000/api-docs
  - Swagger API document
- http://localhost:3000/
- http://localhost:3000/welcome
