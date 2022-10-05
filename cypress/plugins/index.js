/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}


// myscript.js
// This example uses Node 8's async/await syntax.

const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function queryTestDb(query, config) {
  console.log('testeconfig', config)
  let connection;

  try {
    connection = await oracledb.getConnection(config.env.db
    /*  {
      user          : "consulta",
      password      : "dev",
      connectString : "srv-db-12c-2.whebdc.com.br/VVH5RG17"
    }*/
    );
   
    const result = await connection.execute(query);
    return result.rows;
    //console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

queryTestDb();



module.exports = (on, config) => {
  on('task', { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql query
}

