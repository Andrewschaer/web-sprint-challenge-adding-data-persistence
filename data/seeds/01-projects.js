
exports.seed = async function(knex) {
  await knex('projects').insert([
    {project_name: 'Draw A Smiley Face'},
    {project_name: 'Refill Ink in Pen'},
    {project_name: 'Make fiance happy',
    project_description: 'The key to a happy life',
    project_completed: 1
    }
  ]);
};
