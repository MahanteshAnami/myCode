Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm run server
Runs the app mock server 
Open http://localhost:5000 to view in your browser.
This is mock server created to get the json file.

Application Assumption and Improvisations.
1. When API json returns empty or null - Message shown 'No Data Available'
2. On Initial Load - Home page is loaded and none of the plugins loaded but explorer is shown.
3. On Click of each explorer corresponding routes are opened.
4. API Fetch is done on Page is loaded. It is done through Promise.
5. Plugins are displayed on 'Active', 'Disabled', 'Inactive' based. User can have clear understanding purpose.
6. CSS Styling - Use Bootstrap, Flex-React. Not tried on different devices.
