# News Scraper

### Overview
Google Books Search is full stack MERN application. User can search for books via the Google Books API and the app will render them on the Search page. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database which will be rendered on the Saved page with an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

Try it out [here](https://google-books-search-0317.herokuapp.com/).

<kbd><img src="public/images/homepage.PNG"/></kbd>

### Technology used:
- Node.js
- Express
- Axios
- AJAX
- MongoDB
- Mongoose
- React.js
- React Router
- Bootstrap
- Heroku
- mLab


### How to Setup 
1. After cloning this repo run `npm install` to install all dependencies. 
2. We use Mongoose to setup and connect to MongoDB database. 
3. Inside your terminal or Bash window run `npm start` and navigate to `localhost:3000` to view the app.

### Helpful Links
* [MongoDB Documentation](https://docs.mongodb.com/manual/)
* [Mongoose Documentation](http://mongoosejs.com/docs/api.html)
* [React Documentation](https://5c54aa429e16c80007af3cd2--reactjs.netlify.com/docs/getting-started.html)

## Create React Express App - About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
