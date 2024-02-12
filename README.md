# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
EnhanceElement Higher Order Component (HOC.js):

#### This is a Higher Order Component (HOC) responsible for fetching data from an API and passing it down to its wrapped component.
#### It receives two arguments: WrappedElement (the component to be wrapped) and entity (the type of entity to fetch data for).
#### It maintains local state (data and term) to store fetched data and the search term.
#### In the componentDidMount lifecycle method, it fetches data from the JSONPlaceholder API based on the provided entity.
#### It filters the fetched data based on the search term (term) using the filter method.
#### It renders an input field for searching (<input type="text">).
#### It renders the wrapped component (WrappedElement) with the filtered data passed as a prop.

Overall, this project demonstrates the use of React components, a Higher Order Component pattern for data fetching and filtering, and handling user input for searching. It fetches data from the JSONPlaceholder API and displays it dynamically based on user interaction.

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
