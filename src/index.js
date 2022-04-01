const { CeramicClient } = require('@ceramicnetwork/http-client');
const KeyDidResolver = require('key-did-resolver');
const ThreeIdResolver = require('@ceramicnetwork/3id-did-resolver');
const { DID } = require('dids');

// const LOCAL_API_URL = 'http://localhost:7007';
const FREE_API_URL = 'https://gateway-clay.ceramic.network';

const ceramic = new CeramicClient(FREE_API_URL);

const resolver = {
    ...KeyDidResolver.getResolver(),
    ...ThreeIdResolver.getResolver(ceramic),
};

const did = new DID({ resolver });

ceramic.did = did;

