const db = require('../../data/dbConfig')

async function getProjects() {
    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        SELECT *
        FROM projects;      */
    const initialResult = await db('projects');

    const result = initialResult.map(project => {
        if (project.project_completed === 0) {
            return {...project, project_completed: false}

        } else if (project.project_completed === 1) {
            return {...project, project_completed: true}
        }
    });
    return result;
}

async function createProject(newProject) {
    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        INSERT INTO projects
        ('project_name', 'project_description', 'project_completed')
        VALUES ('foo', 'bar', 'true')      */
    const [projectId] = await db('projects').insert(newProject);

    const result = await db('projects').where('project_id', projectId).first();

    if (result.project_completed === 0) {
        result.project_completed = false
    } else if (result.project_completed === 1) {
        result.project_completed = true
    }
    return result;
}


module.exports = { getProjects, createProject };