
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
        {locationsid: 1, base_name: 'No base'},
        {locationsid: 2, base_name: 'Fort Hood'},
        {locationsid: 3, base_name: 'Fort Whore'}
      ])
    })
    .then( () => {
      return knex('users').del()        
    })
    .then(() => {
      return knex('users').insert([
        {usersid: 1, first_name: 'shitake', last_name: 'Clint', base_id:3, email:'213@kkkddgmail.com', phone_number:'867-5309'},
        {usersid: 2, first_name: 'Jbroney', last_name: '$', base_id:3, email:'realacid@gmail.gov', phone_number:'999-5309'}
        
      ])
    })

    .then( () => {
      return knex('posts').del()        
    })
    .then(() => {
      return knex('posts').insert([
        {postsid:1 , post_title:'Not Human Remains for Sale' , post_body:"I am seeling not human remains, plz buy", price:334 , image_url:'www.google.com' , base_id:3 , tag_id:3, user_id:1 },
        {postsid:2 , post_title:"Help wanted" , post_body:"My husband is deployed I need help, must be available for nights" , price:123 , image_url:'www.google.com' , base_id:3 , tag_id:3, user_id:2 },
        {postsid:3 , post_title:'Hi' , post_body:"Hello" , price:0 , image_url:'www.google.com' , base_id:2 , tag_id:1, user_id:1 }
      ])
    })
};
