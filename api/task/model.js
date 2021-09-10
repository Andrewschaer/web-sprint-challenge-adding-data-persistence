const db = require('../../data/dbConfig');

async function getTasks() {
    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        SELECT t.task_id, t.task_description, t.task_notes, t.task_completed, 
            p.project_name, p.project_description
        FROM tasks AS t
        LEFT JOIN projects AS p ON t.project_id = p.project_id;      */

    const initialResult = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 
            't.task_completed', 'p.project_name', 'p.project_description')

    const result = initialResult.map(task => {
        if (task.task_completed === 0) {
            return {...task, task_completed: false}

        } else if (task.task_completed === 1) {
            return {...task, task_completed: true}
        }
    });
    return result;
}

async function createTask(newTask) {
    /*  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}` */

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


module.exports = { getTasks, createTask };