# Mobilicis Internship Task
This is a node js and react js application using Express Framework and MongoDB Database. In this internship task i had to create an application to fetch the required information from the 1000 objects sample data given in the json format. The sample data is loaded on Mongodb atlas and fetched directly from the database. 
The task was to create routes in the backend and create APIs in node js to fetch the following data:
1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. Male Users which have phone price greater than 10,000.
3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. Show the data of top 10 cities which have the highest number of users and their average income.

## Packages Used
1. Express
2. Mongoose
3. Nodemon
4. Cors
5. Axios
6. React Router Dom
7. Chakra Ui

## Backend
The backend files are located in the Server folder in the main directory. The server folder contains the following files:
1. app.js
2. The .env file contains the secret url to the database for connection
3. The routes folder contains the routes for the APIs
4. The models folder contains the schema for the data

App.js in the Server side is used to start the backend and initialize all the connections.
### `Routes`
The routes folder contains the fetch.js file which contains the routes for the APIs. In the fetch.js all the backend routes are made with the help of express router. The backend routes use mongodb aggregate functions to fetch the required data from the database. The aggregate functions are used to filter the data and then the data is sent to the frontend in the form of json. The routes are as follows:
1. /users (GET) , This route fetches all the users from the database.
2. /users/income (GET) , This route fetches all the users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
3. /users/phone-price (GET) , This route is used to fetch the male users which have phone price greater than 10,000.
4. /users/lastname (GET) , This route is used to fetch the users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
5. /users/car (GET) , This route is used to fetch the users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

These routes created are called by the frontend to fetch the data from the database.

### `Backend Hosting`
The backend is hosted on repl.it and the link to the backend is [https://mobilicis.tushar725mittal.repl.co/](https://mobilicis.tushar725mittal.repl.co/)<br/>
All the routes can be accessed by adding the route name after the link.
API call can be easily done by the frontend by using the fetch function and passing the link to the fetch function.

### `Frontend`
The frontend files are located in the src folder in the main directory. The src folder contains the following files:
1. App.js
2. index.js
3. The components folder contains all the components used in the frontend
4. The pages folder contains all the pages used in the frontend

App.js in the frontend side is used to start the frontend and initialize all the connections.
The frontend is completely hosted in netlify and the link to the frontend is [https://mobilicis-internship-task.netlify.app/](https://mobilicis-internship-task.netlify.app/)<br/>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
