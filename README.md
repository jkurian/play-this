# PlayThis

## App Description

Play This is a full-stack app which functions as a social media platform bringing together music lovers to collectively share, discuss and listen to music. Through a private network of friends, you will have access to post or receive song recommendations in forums created with a focus on a specific musical topic. 
It was developed using JavaScript, Express, PostgreSQL, React, Redux and designed with Material UI. Music streaming and search powered by Spotify.

## Screenshots
![Screenshot of landing page](https://github.com/jkurian/play-this/blob/master/docs/playthis_landing.png)
![Screenshot of forum](https://github.com/jkurian/play-this/blob/master/docs/playthis_forum.png)


## Getting Started

1. Create the .env by using .env.example as a reference: cp .env.example .env
2. Update the .env file with your correct local information
3. Install dependencies: npm i
4. Run migrations: npm run knex migrate:latest
5. Check the migrations folder to see what gets created in the DB
6. Run the seed: npm run knex seed:run
7. Check the seeds file to see what gets seeded in the DB
8. Run the express server: node ./server/index.js
9. Run Webpack: npm run dev
10. Visit http://localhost:8080/

## Dependencies
 - axios
 - bcrypt
 - cookie-parser
 - cors
 - dotenv
 - fuse.js
 - jsonwebtoken
 - knex
 - lodash
 - material-ui
 - moment
 - npm
 - pg
 - prop-types
 - querystring
 - react
 - react-dom
 - react-moment
 - react-redux
 - react-router-dom
 - redux
 - redux-persist
 - redux-promise-middleware
 - redux-storage
 - request
 - spotify-web-api-js
 - spotify-web-api-node
 - webpack-dev-server
    
