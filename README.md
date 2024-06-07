# Recipe Finder

## Overview
Recipe Finder in a web application that allows users to search for recipes and view detailed information about each recipe. The project is built using React, React Router, Axios and styled-components.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
    - [Running the Development Server](#running-the-development-server)
    - [Building the Project](#building-the-project)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed:

- Node.js (v12 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/hasantohidul/recipe-finder.git
   cd recipe-finder
   ```
2. Install Dependencies
```bash
npm install
# or
yarn install
```
## Usage

### Running the Development Server

To start the development server, run:

```sh
npm start
# or
yarn start
```

### Building the Project

To create a production build, run:

```sh
npm run build
# or
yarn build

## Project Structure
The prject Structure is as follows:

```sh
src/
|-- assets/
|   |-- placeholder.png
|-- components/
|   |-- Header.js
|   |-- RecipeCard/
|   |   |-- RecipeCard.js
|   |   |-- RecipeCard.styles.js
|   |-- RecipeDetails.js
|   |-- RecipeList.js
|   |-- SearchBar.js
|-- pages/
|   |-- Home.js
|   |-- RecipePage.js
|-- styles/
|   |-- GlobalStyles.js
|-- utils/
|   |-- api.js
|-- App.js
|-- index.js
public/
|-- icon.jpg
|-- index.html
```
## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject` or `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add some YourFeature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
