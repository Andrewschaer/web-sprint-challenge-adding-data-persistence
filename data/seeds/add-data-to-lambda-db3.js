
exports.seed = async function(knex) {
  await knex('projects').truncate();
  await knex('projects').insert([
    {project_name: 'Draw A Smiley Face'},
    {project_name: 'Refill Ink in Pen'},
    {project_name: 'Make fiance happy',
    project_description: 'The key to a happy life',
    project_completed: 1
    }
  ]);
  await knex('resources').truncate();
  await knex('resources').insert([
    {resource_name: 'Pen', 
    resource_description: 'A thing you write with that contains an ink cartridge',
    },
    {resource_name: 'Paper'},
    {resource_name: 'Ink'},
    {resource_name: 'Flowers', 
    resource_description: 'Pretty looking plants that grow outside and smell nice',
    },
    {resource_name: 'Food to Make Dinner'}
  ]);
  await knex('tasks').truncate();
  await knex('tasks').insert([
    {task_description: 'Get a pen & piece of paper',
    project_id: 1
    },
    {task_description: 'Draw two eyes',
    project_id: 1
    },
    {task_description: 'Draw a mouth',
    project_id: 1
    },
    {task_description: 'Draw a circle around eyes and mouth',
    task_notes: 'You need to first finish all other tasks for this project to complete this',
    project_id: 1
    },
    {task_description: 'Take pen apart',
    task_notes: 'If you do not know how, google it',
    task_completed: 1,
    project_id: 2
    },
    {task_description: 'Throw away old ink cartridge',
    project_id: 2
    },
    {task_description: 'Put pen back together with new ink cartridge',
    task_notes: 'Just do whatever you did to take it apart, but in reverse',
    project_id: 2
    },
    {task_description: 'Buy flowers',
    task_notes: 'Make sure they are healthy and do not have bugs',
    task_completed: 1,
    project_id: 3
    },
    {task_description: 'Make dinner',
    task_notes: 'She usually likes a healthy dinner so include some veggies',
    task_completed: 1,
    project_id: 3
    },
    {task_description: 'Make her laugh',
    task_notes: 'This one can be tough - time it right by accessing her mood',
    task_completed: 1,
    project_id: 3
    },
    {task_description: 'Tell her she is beautiful',
    task_notes: 'Do this as often as possible - not a one time deal!',
    task_completed: 1,
    project_id: 3
    }
  ]);
  await knex('project_resources').truncate();
  await knex('project_resources').insert([
    {project_id: 1,
    resource_id: 1
    },
    {project_id: 1,
    resource_id: 2
    },
    {project_id: 2,
    resource_id: 1
    },
    {project_id: 2,
    resource_id: 3
    },
    {project_id: 3,
    resource_id: 4
    },
    {project_id: 3,
    resource_id: 5
    }
  ]);
};
