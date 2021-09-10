
exports.seed = async function(knex) {
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
};
