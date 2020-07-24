# COTABOX FULLSTACK CHALLENGE FRONTEND

- [COTABOX FULLSTACK CHALLENGE FRONTEND](#cotabox-fullstack-challenge-frontend)
  - [What is this Front-End?](#what-is-this-front-end)
  - [How this integrates with the API?](#how-this-integrates-with-the-api)
  - [Demo](#demo)
  - [How can i contribute (or just test it)?](#how-can-i-contribute-or-just-test-it)
  - [What can i do here? What's the functionalities?](#what-can-i-do-here-whats-the-functionalities)
    - [**BUTTONS**:](#buttons)
      - [Add Contributor:](#add-contributor)
      - [Remove Contributor:](#remove-contributor)
      - [WIPE DATA:](#wipe-data)
    - [**VIEWS**:](#views)
      - [TABLE:](#table)
      - [CHART:](#chart)
  - [Technologies](#technologies)

![Challenge Finished](https://uc631722aaff46199614a09a0846.previews.dropboxusercontent.com/p/thumb/AA3TPtloFPFs1ENFaRz9fFJo_BxlDogpfp384cPZqI_mlf_eU63CxFHrUI1SJk3HuUeZ9UigegmK828NyTnIHk2b41A5Fx5AXqs-2v45iEvtnG6Yw3yUZc68NVWQQc5Zk5nFilbukPGY-B_thla18azfQNrPBpDJ2vtzHEIwjZk5rpLhNVgJx_ilkFlUX4XowqqsJCxRzEgbhAXnD_uvt5N5q0ZuPKSTXode7UxI83seDw9SefXUpXyysYc_s1tQamvJKe-m9UWVinUtNKfbqVkzyNN1cEwBHwdDccpbM0vyr4EFRfMqNMP3X6RRAsOm2Pj84ZYsrcU7N3nq4VHI4VdYHUvWydHoC2VMWeJgde84rT6OqyYJLqcastRsmqPwR4DaCo1jClxNUTMqx9Ic8C5c/p.png?fv_content=true&size_mode=5)

## What is this Front-End?

This project is part of an application called cotabox-fullstack-challenge, who is part of a practical test for a job opportunity. It works together with the api to perform actions over a MongoDB Database, using a web front-end.

## How this integrates with the API?

This Front-End integrates with the [API]((https://github.com/noriskii/cotabox-fullstack-challenge-api)) to retrieve and perform actions over the MongoDB database, this is an visual experience of the API, designed to be used by the clients.

## Demo

A demo for this project is available on Vercel

https://cotabox-fullstack-challenge-frontend.vercel.app/

## How can i contribute (or just test it)?

If you want to contribute, feel free to Clone this repository.

To start using it, yout need the API up and running on your computer/server ([Follow this repo instructions](https://github.com/noriskii/cotabox-fullstack-challenge-api#how-can-i-contribute-or-just-test-it)). After this, follow these steps in the project directory:

In the `src/services/api.js` file, put your server IP and PORT of running API on `baseURL:` line, if you're not using an server and just running local, put `'http://localhost:3333'` on `baseURL:` line, and save it.

Run `yarn init` or `npm init`

Run `yarn start` or `npm start` to start the server (The page will reload if you make edits.). For production server, use `yarn build` instead

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## What can i do here? What's the functionalities?

With the project opened on your browser, you can use these functionalities:

### **BUTTONS**:
#### Add Contributor:
> NOTE: You need to fill the form with the First Name, Last Name and Contribution of contributor.

With this button, you add a new participant to the table of contributors.

#### Remove Contributor:
> NOTE: You need to fill the form with the First Name, Last Name of contributor.

With this button, you remove the participant of the table of contributors.

#### WIPE DATA:
> NOTE: THIS BUTTON WILL WIPE ALL THE DATABASE DATA

With this button, you remove all participants of the table.

### **VIEWS**:

#### TABLE:
The table will automatically update when you add or remove a participant, and shows the first name, last name, and % of participant contribution.

#### CHART:
The chart shows a pie with the portion of the contribution of each participant, updating automatically on change.

## Technologies
- ReactJS (with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started));
- styled-components;
- Sweet Alert 2;
- axios;

<br>
<br>
<br>

**Made with :heart: ReactJS, and Styled Components by Lucas Augusto.**