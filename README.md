# PicMap Web


PicMap is a place where you can share photos, follow friends, comment on photos...

To see it in action, have a look at [Put hosting here]


## Technology used
# Pic Map is made using Google Firebase app templet

The PicMap frontend is built using JavaScript, [Firebase](https://firebase.google.com/docs/web/setup) and jQuery.

PicMap is written in ES2017 using Modules so for wide browser support the code is packed and transpiled to ES5 using [Webpack](https://webpack.js.org/). 

The Auth flow is using [Firebase-UI](https://github.com/firebase/firebaseui-web).

Javascript Runtime dependencies as well as Build and deploy dependecies are managed using [npm](http://npmjs.com/). 

Server-side micro-services are built on [Cloud Functions for Firebase](https://firebase.google.com/docs/functions).


## Run the project

1. In a console run `npm install` to install all Build/Deploy tools dependencies.
1. Create a Firebase project using the [Firebase Console](https://firebase.google.com/console).
1. Visit the **Storage** section and enable storage by clicking the **Getting Started** button.
1. Enable **Google** as a Sign in provider in **Firebase Console > Authentication > Sign in Method** tab.
1. In a console run `firebase use --add` and, when prompted, select the Firebase Project you have just created. This will make sure the Firebase CLI is configured to use your particular project.


## Start a local development server

You can start a local development server by running:

```bash
npm run serve
```

This will start `firebase serve` and make sure your Javascript files are transpiled automatically to ES5.

Then open [http://localhost:5000](http://localhost:5000)

> Note 1: On new projects, the Realtime Database and Cloud Storage come with default Security rules that prevent all read and writes. You'll need to deploy the security rules and Cloud Functions once first. For this run: `firebase deploy --only database,storage`

> Note 2: All Cloud Functions cannot yet be ran locally. Deploy them once first if you want these features active (such as image and text moderation). For this run: `firebase deploy --only functions`


## Deploy the app

To deploy the app run:

```bash
firebase deploy
```

Before deploying this will automatically install all runtime dependencies, transpile the Javascript code to ES5 and install Cloud Functions dependencies.
Then this deploys a new version of your code that will be served from `https://<PROJECT_ID>.firebaseapp.com`


## Admins

To make a user an admin - allowing him to delete any posts - manually add an entry to `/admins/$index/email: admin@email.com`. For instance `/admins/1/email: bob@gmail.com`. To database


