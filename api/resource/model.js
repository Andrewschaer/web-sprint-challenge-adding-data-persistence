const db = require('../../data/dbConfig');

async function getResources() {
    /*  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]` */

    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        SELECT *
        FROM resources; */
    return await db('resources')
}

async function createResource(newResource) {
    /*  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}` */
    return null
}


module.exports = { getResources, createResource };