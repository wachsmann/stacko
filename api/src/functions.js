import {https} from 'firebase-functions';
import gqlServer from './graphql/server';
const admin = require('firebase-admin')

try {
   admin.initializeApp()
 } catch (error) {
     console.log(error)
}
const server = gqlServer();

// Graphql api
// https://us-central1-<project-name>.cloudfunctions.net/api/
const api = https.onRequest(server);

export {api};
