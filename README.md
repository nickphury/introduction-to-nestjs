<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Environment variable storage in .env file

## .env

```diff
NODE_ENV=development
PORT=3000

# connection to SQL database
#In this application, i use mysql as DBMS

TYPEORM_CONNECTION = mysql
TYPEORM_HOST = localhost
TYPEORM_USERNAME = tutorials
TYPEORM_PASSWORD = ******
TYPEORM_DATABASE = data_base_name
TYPEORM_PORT = 3306
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = dist/**/*.entity.js,dist/**/*.entity.ts
```

Nest is [MIT licensed](LICENSE).
