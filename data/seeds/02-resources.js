
exports.seed = async function(knex) {  // Deletes ALL existing entries
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
};
