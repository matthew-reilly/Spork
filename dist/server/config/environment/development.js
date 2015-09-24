'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/spork2-dev'
  },
  sequelize: {
    uri: 'postgres://kfcmxezurdpqwe:q-3HOC6dmfCjJM4b-zitRydkCM@ec2-54-235-151-252.compute-1.amazonaws.com:5432/daekg490ckc2o5',
    options: {
      //logging: false,
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      dialectOptions: {
        ssl: true
      },
      username: 'postgres',
      password: '1234',
      define: {
        timestamps: false
      }
    }
  },
  seedDB: true
};
//# sourceMappingURL=development.js.map
