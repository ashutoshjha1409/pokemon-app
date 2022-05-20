# Pokemon APP

This project was bootstrapped with [Create React App].

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `Performance optimized code`

We can optimize our code by using webpack to creating smaller chunks of bundle using code-split feature.
We can use lazy loading concept for importing components. 
We can use Redux store for storing the data fetched. This will prevent API calls for the pages whose data was already fetched.

### `Linter Configuration`

We can use eslint-plugin-jsx-a11y plugin for checking accessibities in our code. We will have to define plugins and different rules to target specific usecases.
We can also set rules for checking keyboard navigation using eslint.