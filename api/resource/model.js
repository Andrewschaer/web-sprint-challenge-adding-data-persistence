const db = require('../../data/dbConfig');

async function getResources() {
    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        SELECT *
        FROM resources; */
    return await db('resources');
}

async function createResource(newResource) {
    /* SQL QUERY TO MODEL FUNCTION OFF OF:
    INSERT INTO resources
    ('resource_name', 'resource_description')
    VALUES ('foo', 'bar')      */
    const [resourceId] = await db('resources').insert(newResource);

    const result = await db('resources').where('resource_id', resourceId).first();
    return result
}


module.exports = { getResources, createResource };