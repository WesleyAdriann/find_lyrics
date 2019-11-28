# find lyrics

## Description

This is example of use api lyrics

## Hierarchy

- **/public** directory where the react injects javascript in develop;
- **/build** directory created after execute command *build*, where is located files for production;
- **/src** directory where the develop files is located;
  - **/assets** directory where static files like fonts and images is located;
  - **/services** directory where the files related to services used in the application will be created, for example HTTP requests;
  - **/views** directory where de pages is located.

## Prerequisites

- [NodeJS](https://nodejs.org)
- [npm](https://www.npmjs.com)

## Usage

In the frontend directory, install the dependencies
```bash
npm install
```
Start React development  server
```bash
npm start
```
Await for browser window open in http://localhost:3000 .

## Deployment

In the frontend directory, install the dependencies
```bash
npm install
```
Execute build command to create minify version to production
```bash
npm run build
```
Will be create folder **/build** with the files. Inserts into HTTP server.
[More information](https://create-react-app.dev/docs/deployment/)

## Built With

- [ReactJS](https://reactjs.org)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://www.styled-components.com)

## Environment variables
Environment variables is located in */src/config/config.js*

**SEARCH LYRICS** - Endpoint to search lyrics
```json
ENDPOINT_LYRICS: "https://api.lyrics.ovh/v1"
```

## Observation

### ReactJS Script's
Start development server
```bash
start
```
Creates production version
```bash
build
```
Execute tests
```bash
test
```
Ejects project from create-react-app ([more infomation](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md#npm-run-eject))
```bash
eject
```
