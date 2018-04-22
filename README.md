# ShiftAPPens
## The Team :grimacing:
- Catarina Pires
- Jessica Cunha
- Rafael Paiva
- Victor Moraes

## Description

A website aimed at youth that search for, in their free time, to do some activity, such as voluteering, part-time jobs, internships, you name it. :money_with_wings:

## Installing environment
The environment depends on Node.JS 8.x or later and NPM. Be sure both are installed in your system.

Before developing be sure to install all dependencies for both the backend and frontend.

```bash
npm install --local
```

Now, to start the frontend development simply run `npm start`. 

To start backend development fire up the server with `node server/index.js`


# Backend

Using ExpressJS, MongoDB as dependecies, the backend uses RPC (Remote Procedure Call) instead of the traditional REST API design to quickly iterate and introduce data schemas.

In addition, requests done against the server need only to indicate which Collection (a table in RDM) and which action to take alongside with any relevant data and the server will respond in a generic fashion.

A request is a HTTP request with a JSON body:
```js
// Using the Fetch API
fetch('https://127.0.0.1/api/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'object': 'voluntary_work',
    'action': 'find',
    data: {
      id: '14483'
  })
})
```
In this example it asks to `find` a `voluntary work` with the specified `ID`. If I wanted to find all `voluntary work` a simple `{}` for the data would then trigger the server to send all voluntary work it can scrape from the DB.

