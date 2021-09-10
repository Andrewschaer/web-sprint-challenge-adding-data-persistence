const db = require('../../data/dbConfig')

async function getProjects() {
    /*  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}] */

    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        Select *
        From projects;      */
    const initialResult = await db('projects')

    const result = initialResult.map(project => {
        if (project.project_completed === 0) {
            return {...project, project_completed: false}

        } else if (project.project_completed === 1) {
            return {...project, project_completed: true}
        }
    })
    return result
}

async function createProject(newProject) {
    /*  - Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}` */
    return null
}


module.exports = { getProjects, createProject };