# Phone Catalogue

Phone Catalogue is a **Single Page Application** which contains a **REST API**.
It displays a list of phones with some details (name, manufacturer, image). When one of them is selected, it renders a detail of that particular phone with a few more details.

## Set up and installation
- Clone this repo. Make sure you have Node installed
- In order to install all required packages run:

```
npm install
```
- The entire project can be run by running the following command in the project directory:

```
npm run dev
```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### About `npm run dev`

- This command runs `concurrently \"nodemon server.js\" \"npx webpack -w\" `. 
- **Concurrently** allows you to run two commands by using only one.
- **Nodemon** is a watcher that restarts the server after changes.
- **Webpack** bundles JS files for usage in the browser.
- The `server.js` file redirects to the public folder, with our `index.html`, which loads all javascript needed for the client side.

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
- [React](https://reactjs.org/) as a library for JS 
- [Redux](https://redux.js.org/) for state management
- [React Router](https://reactrouter.com/) for route management (`'/'` and `'phone-detail/:phoneId'`)

The entire project uses [Babel](https://babeljs.io/), a modular JavaScript transpiler that helps to use next generation JavaScript and more, like transformation for JSX. 

## Author
Built by [Natalia Millán Sahún](https://github.com/neired) for [GuideSmiths](https://www.guidesmiths.com/)' interview code challenge.