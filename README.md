# Phone Catalogue

Phone Catalogue is a **Single Page Application** which contains a **REST API**.
It displays a list of phones with some details (name, manufacturer, image). When one of them is selected, it renders a detail of that particular phone with a few more details.
This project contains:
  - A main screen, or Home, with:
    - a list of phones, showing an image, their name, price and manufacturer,
  - A detail screen for each phone with:
    - an image, their name, manufacturer, price, color, a brief description and specifications such as screen, RAM or processor.

## Set up and installation

- Clone this repo. Make sure you have Node installed.
- In order to install all required packages run:

```
npm install
```
- The entire project can be run through the following command in the project directory:

```
npm run dev
```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### About `npm run dev`

This command runs `concurrently nodemon server.js npx webpack -w`: 
- `concurrently` allows you to run two commands by using only one.
- `nodemon` is a watcher that restarts the server after changes.
- `webpack` bundles JS files for usage in the browser in one file: `bundle.js`.
- The `server.js` file redirects to the public folder, with our `index.html`, which loads all javascript (`bundle.js`) needed for the client side.

## Run Phone Catalogue via Docker

- As a prerequisite, [Docker](https://www.docker.com/) must be installed in your machine.

- From root directory run:
```
docker build -t phone-catalogue .
docker run -d phone-catalogue
```

Once the installation is complete, open a browser and point to [http://localhost:3000](http://localhost:3000) to get started.

## Rest API

The REST API created is based on [Nodejs](https://nodejs.org/en/) and has one endpoint.
| HTTP verb |   URI   | Action           |
|:---------:|:-------:|:----------------:|
| GET       | /phones | lists all phones |

## Built With

On the server side:
- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/) as a framework for Node.js

On the client side:
- [Axios](https://github.com/axios/axios) for fetching data from the API
- [React](https://reactjs.org/) as a library for JS with:
  - Prop-types for the definition of every prop type,
  - [React Router](https://reactrouter.com/) for the creation and connection of the different screens,
  - Sass for styling, using Grid in the main screen,
  - Destructuring for code simplification in order to make it more readable,
  - Mobile first for responsive design.
- [Redux](https://redux.js.org/) for state management

The entire project uses [Babel](https://babeljs.io/), a modular JavaScript transpiler that helps to use next generation JavaScript and more, like transformation for JSX. 

## Author

Built by [Natalia Millán Sahún](https://github.com/neired) for [GuideSmiths](https://www.guidesmiths.com/)' interview code challenge.