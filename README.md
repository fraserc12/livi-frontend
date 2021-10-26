This app relies on this repo being started: https://github.com/fraserc12/livi-api-demo/

## Set Up

Please run `npm install` and then `npm start`\

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### What this app does

This app will fetch the backend application at: [http://localhost:3000/external/all](http://localhost:3000/external/all)
**every 10 seconds.** via the `useEffect` React hook using setInterval 

Displaying health data for the various applications we have stored in the backend database.

Please use Swagger for the backend to create services. 

<img width="633" alt="image" src="https://user-images.githubusercontent.com/22052706/138936016-a9aae1e4-9956-4020-9d21-5c82041931ff.png">
