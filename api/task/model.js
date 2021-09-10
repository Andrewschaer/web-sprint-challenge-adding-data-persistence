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
    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        INSERT INTO tasks
        ('task_notes', 'task_description', 'task_completed', 'project_id')
        VALUES ('foo', 'bar', 'true', '1') */
    const [taskId] = await db('tasks').insert(newTask);

    const result = await db('tasks').where('task_id', taskId).first();

    if (result.task_completed === 0) {
        result.task_completed = false
    } else if (result.task_completed === 1) {
        result.task_completed = true
    }
    return result;
}


module.exports = { getTasks, createTask };