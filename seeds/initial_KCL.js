
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {tagid: 1, tag_name: 'Wanted'},
        {tagid: 2, tag_name: 'Buy'},
        {tagid: 3, tag_name: 'Sell'}
      ]);
    })
    .then( () => {
      return knex('locations').del()        
    })
    .then(() => {
      return knex('locations').insert([
      
      ]
    })
};
