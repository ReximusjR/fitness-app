# HIGHLIGHT TAKE HOME ASSESSMENT

## Application Concept

A fitness app is being created that will allow a user to view routines and track progress within the app. Existing app functionality was given from the link provided and below are the list of new requirements:

- An endpoint needs to be created that will accept a JSON payload containing properties (defined below) to create a new session in the application.

- A scheduler service needs to be created that will parse the reminders listed on the session and handle calling a fictional notifications service when they are scheduled to fire. You can assume that the notifications service lives at `*/notify` and for the purposes of this assignment it is sufficient to send a POST request to that endpoint with the session object to trigger a notification

- An endpoint needs to be created to query the scheduled reminders and see what the status is of all currently active reminders. You should think about what queries and returns might be helpful here, especially as it might relate to debugging or testing the code.

# Environment Setup

### Prerequisites (what I used to run app locally)

- I am using npm version 8.3.1, but anything 8.x.x should work
- node version 16.14.0, but anything 16.x.x should work
- Verify the versions of npm (use npm -v) and node above (use node -v)

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

## Tests

Unit tests can be found in fitness-app/src/tests

Make sure to cd into fitness-app in order to run the tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

to manually hit the endpoints with Postman:

1. make sure app is running and hit POST to http://localhost:3000/sessions
2. use post body:
   {
   "id": 1,
   "userId": 12,
   "title": "yay-title",
   "routine": {
   "title": "xyz-title"
   },
   "startTime": "Date",
   "duration": 5,
   "frequency": "DAILY",
   "reminders": 6,
   "notes": "notes-here"
   }

   then hit the GET http://localhost:3000/sessions/1 to retrieve that "created" session

## Important Functionality Not Covered In the Assignment

1. Proper Logging to New Relic/etc with a Winston Logger/etc
2. gitlab-ci.yml file to orchestrate our CI/CD (deploy to test\staging\prod)

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
