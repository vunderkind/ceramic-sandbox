const { CeramicClient } = require('@ceramicnetwork/http-client');
const KeyDidResolver = require('key-did-resolver');
const ThreeIdResolver = require('@ceramicnetwork/3id-did-resolver');

// const LOCAL_API_URL = 'http://localhost:7007';
const FREE_API_URL = 'https://gateway-clay.ceramic.network';

const CERAMIC = new CeramicClient(FREE_API_URL);