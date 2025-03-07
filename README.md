# Greeting App

A simple full-stack application with a Node.js/Express backend and a React frontend. The backend provides an API endpoint that returns a personalized greeting message, and the frontend fetches and displays this message.

## Technologies Used

- **Backend**: 
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [CORS](https://www.npmjs.com/package/cors) (for enabling cross-origin requests)
- **Frontend**: 
  - [React](https://reactjs.org/) (created with Create React App)


## Getting Started

### Backend

1. **Installation**

   Navigate to the `Backend` folder and install the required dependencies:

   ```bash
   cd Backend
   npm install
   
2. **Running the Server**
   ```bash
    npm start
   ```
3. **The server listens on port 5000 by default. You can test the API by visiting using Postman:**

   ```bash
    http://localhost:5000/api/greet?name=YourName
   ```

### Frontend

1. **Installation_**

   Navigate to the Frontend folder and install the dependencies:

  ```bash
  cd Frontend
  npm install
 ```

2. **Running the App**
   Start the React development server:

  ```bash
   npm start
  ```


The app will be available at http://localhost:5000.

### Usage

   Enter your name in the input field.
   Click on the "Get Greeting" button.
   The application will call the backend API and display your personalized greeting.

   
## Deployment
   Deployed backend and frontend on Render

## Live Link
   - [Greeting App](https://greeting-frontend-8sf9.onrender.com)
