
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {tag_name: 'Wanted'},
        {tag_name: 'Buy'},
        {tag_name: 'Sell'}
      ]);
    })
    .then( () => {
      return knex('locations').del()        
    })
    .then(() => {
      return knex('locations').insert([
        {base_name: 'No base'},
        {base_name: 'Fort Hood'},
        {base_name: 'Lackland AFB'}
      ])
    })
    .then( () => {
      return knex('users').del()        
    })
    .then(() => {
      return knex('users').insert([
        {first_name: 'Jimmy', last_name: 'O Reily', base_id:2, email:'213@kkkddgmail.com', phone_number:'867-5309'},
        {first_name: 'Jbroney', last_name: '$', base_id:1, email:'realacid@gmail.gov', phone_number:'999-5309'}
        
      ])
    })

    .then( () => {
      return knex('posts').del()        
    })
    .then(() => {
      

      return knex('posts').insert([
        {post_title:'Motorcyle', post_body:"This is the best motorcyle in the world, others don't even compare. Contact me at 555-555-5555", price:150 , image_url:'www.google.com' , base_id:2 , tag_id:3, user_id:1 },
        {post_title: "Charizard Pokemon Card", post_body: "I am willing to buy any charizard pokemon card willing to pay up to $50. Contact me at 555-555-5555", price: 50, image_url: "https://bit.ly/32yLGVP", base_id: 1, tag_id: 2, user_id: 1 },
        {tag_id: 1, user_id: 2, post_title: "Bike", post_body: "This is the best bike in the world, others don't even compare. Contact me at 555-555-5555", base_id: 1, price: 150, image_url: "https://bit.ly/3vcgcRX"},
        {
          tag_id: 1,
          user_id: 1,
          post_title: "Nintendo Switch",
          post_body: "Find yourself recently single?  Then you need this! Contact me at 555-555-5555",
          base_id: 1,
          price: 350,
          image_url: "https://bit.ly/3v0IHBG"
      },

      {
        tag_id: 1,
        user_id: 2,
        post_title: "Car",
        post_body: "Its fast than what you have now! Contact me at 555-555-5555",
        base_id: 1,
        price: 55000,
        image_url: "https://bit.ly/3dAhe4c"
    },
    {post_title:'Motorcyle', post_body:"This is torcyle in the world, others don't even compare. Contact me at 555-555-5555", price:150 , image_url:'www.google.com' , base_id:3 , tag_id:1, user_id:1 },
    {post_title:'Motorcyle', post_body:"This is the best motorcyle in the world 55-555-5555", price:150 , image_url:'www.google.com' , base_id:2 , tag_id:3, user_id:1 },
    {post_title:'Mote', post_body:"Tthe best motorcyle in the world, others don't even compare. Contact me at 555-555-5555", price:150 , image_url:'www.google.com' , base_id:1 , tag_id:2, user_id:1 }
      ])
    })
};
