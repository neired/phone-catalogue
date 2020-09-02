# Phone Catalogue

Phone Catalogue is a **Single Page Application** which contains a **REST API**.
It displays a list of phones with some details (name, manufacturer, image). When one of them is selected, it renders a detail of that particular phone with a few more details.

## Installation
In order to install all dependencies neeeded for this project run:

```
npm install
```

## Deploy
The entire project can be run through the following command. It will open on port [http://localhost:3000](http://localhost:3000).

```
npm run dev
```
- This command runs `concurrently \"nodemon server.js\" \"npx webpack -w\" `. 
- **Concurrently** allows you to run two commands by using only one.
- **Nodemon** is a watcher that restarts the server after changes.
- The `server.js` file redirects to the public folder, with our `index.html`, which loads all javascript needed for the client side.
- **Webpack**

## Rest API
The REST API created is based on [Nodejs](https://nodejs.org/en/) and has one endpoint.
| HTTP verb |   URI   | Action           |
|:---------:|:-------:|:----------------:|
| GET       | /phones | lists all phones |

## Built With
On the server side:
- [Nodejs](https://nodejs.org/en/)

On the client side:
- [Axios](https://github.com/axios/axios) for fetching data from the API
- [React](https://reactjs.org/) 
- [Redux](https://redux.js.org/) for state management
- [React Router](https://reactrouter.com/)

## Author
Built by [Natalia Millán Sahún](https://github.com/neired) for [GuideSmiths](https://www.guidesmiths.com/)' interview code challenge.