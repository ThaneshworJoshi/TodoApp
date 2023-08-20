# Frontend Architecture Document:

## Product

    The product is a todo list using React and RTK with dragdrop functionality.

## Technologies

    1. Typescript: As the primary language
    2. Storybook: For easy component documentation
    3. Husky: For pre commit checks.
    4. Jest: For testing React component
    5. Prettier: For code formatting
    6. RTK: For state management
    7. Axios: For API requests
    8. MUI : For rapid UI developemen
    9. Json-server: For backend server

## Project installation

      Navigate to the project directory:** Open a terminal and navigate to your project directory where the "package.json" file is located.

### Frontend:

1.  Install project dependency:

        yarn install

2.  Start the development server:

        yarn start

### Backend:

1.  Install JSON Server globally (if not already installed):

        npm install -g json-server

2.  Start JSON Server with the provided db.json file and specify the port (e.g., 5000):

        json-server --watch db.json --port 5000
