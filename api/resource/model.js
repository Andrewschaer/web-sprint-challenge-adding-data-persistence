const db = require('../../data/dbConfig');

async function getResources() {
    /*  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]` */

    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        SELECT r.recipe_id,
            r.recipe_name,
            r.created_at
            s.step_id,
            s.step_number,
            s.step_instructions,
            q.quantity,
            i.ingredient_name,
            i.ingredient_id
        FROM recipes as r
        LEFT JOIN steps as s ON r.recipe_id = s.recipe_id
        LEFT JOIN step_ingredients as q ON s.step_id = q.step_id
        LEFT JOIN ingredients as i ON q.ingredient_id = i.ingredient_id; */
    return null
}

async function createResource(newResource) {
    /*  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}` */
    return null
}


module.exports = { getResources, createResource };