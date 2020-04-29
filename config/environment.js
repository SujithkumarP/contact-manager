'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'contacts-manager',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase:{
    apiKey: "AIzaSyDBJ_8OwHkb-Sk74qfe8zWZj5xEvoYu0Fk",
    authDomain: "contacts-manager-6187a.firebaseapp.com",
    databaseURL: "https://contacts-manager-6187a.firebaseio.com",
    projectId: "contacts-manager-6187a",
    storageBucket: "contacts-manager-6187a.appspot.com",
    messagingSenderId: "765366703507",
    appId: "1:765366703507:web:9482e6b7a603b3259f8466",
    measurementId: "G-CZFV3M7Q8D"
  },



    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
