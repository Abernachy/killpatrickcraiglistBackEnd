
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
      
      // update seed data to represent specific things (wanted for help , buying for buying, selling for selling)
      // tagID - 1 : Wanted , 2: Buying 3: selling
      // baseId - 1 : No base , 2: Fort Hood , 3: JBSA
      return knex('posts').insert([
        //Selling Seeds
        {post_title:'Motorcyle', post_body:"This is the best motorcyle in the world, others don't even compare. Contact me at 555-555-5555", price:349 , image_url:'https://bit.ly/2QL6Ays' , base_id:2 , tag_id:3, user_id:1 },

        { post_title: "Bike", post_body: "This is the best bike in the world, others don't even compare. Contact me at 555-555-5555",  price: 150, base_id: 3, tag_id: 3, user_id: 2, image_url: "https://bit.ly/3vcgcRX"},

        {post_title: "Nintendo Switch", post_body: "Find yourself recently single?  Then you need this! Contact me at 555-555-5555", price: 350, image_url: "https://bit.ly/3v0IHBG", base_id: 1, tag_id: 3, user_id: 1},

        {post_title: "Nintendo Switch", post_body: "I'm selling a Nintendo Switch, please buy it", price: 450, image_url: "https://bit.ly/3v0IHBG", base_id: 1, tag_id: 3, user_id: 1},

        //Buying Seeds
        {post_title: "Charizard Pokemon Card", post_body: "I am willing to buy any charizard pokemon card willing to pay up to $50. Contact me at 555-555-5555", price: 50, image_url: "https://bit.ly/32yLGVP", base_id: 2, tag_id: 2, user_id: 1 },
        
        {post_title: "Magic The Gathering Cards", post_body: "I'm looking for Magic: The Gathering cards, I'm willing to pay. Contact me at 314-159-2653", price: 50, image_url: "https://bit.ly/3awZsgb", base_id: 3, tag_id: 2, user_id: 1 },

        {post_title: "Buying>Kitten", post_body: "I want to buy a cute kitten similiar to the one pictured, please call me at 867-5309", price: 0, image_url: "https://bit.ly/3gsZo4U", base_id: 3, tag_id: 2, user_id: 1 },

        {post_title: "LF Gaming PC", post_body: "I am looking to buy a gaming PC that will play modern games at high graphics, I'm willing to pay no more than 200$, please respond, no fakers.", price: 200, image_url: "https://bit.ly/32yLGVP", base_id: 2, tag_id: 2, user_id: 1 },

        {post_title: "Buying a Football, but only for cheap", post_body: "As per title, I'll pay no more than 3$", price: 3, image_url: "https://bit.ly/32yLGVP", base_id: 2, tag_id: 2, user_id: 1 },

        //Wanted Seeds
        {post_title:'Wanted: Furniture Mover', post_body:"I'm moving furniture this weekend and I could use a hand, I'll pay you 100$, please call me via Command Post", price:100 , image_url:'https://bit.ly/3tJ8ePP' , base_id:3 , tag_id:1, user_id:1 },

        {post_title:'Mechanic', post_body:"I need a mechanic to help restore my car to working order.  I'll pay you in exposure, I'm a Fortnite Twitch Streamer with 15k subs.", price:0 , image_url:'https://bit.ly/32DzZxh' , base_id:2 , tag_id:1, user_id:1 },

        {post_title:'React Web Developer', post_body:"The 34234th FSS is looking for a React developer with full stack experience in order to fix an issue with our current application.  Must have 23 years experience and be knowledgeable in languages like Javascript, C++, and Visual Basic.", price:150 , image_url:'https://i.redd.it/pdvkpgjq6vo11.jpg' , base_id:2 , tag_id:1, user_id:1 },

        {post_title:'Looking for a career change?', post_body:"Are you looking to change your careers to a new and exciting one?  The US Army is recruiting and we are looking for the best of the best of the best.  If you want to see the world, get valuable skills, and set yourself up for financial success, come to US Army Recruiting station on base.  Offering bonuses of up to $100000 for select careers, don't let your current commitment stop you from change.  Apply today", price:0 , image_url:'https://bit.ly/3tMo4sT' , base_id:2 , tag_id:1, user_id:1 },
          ])
    })
};
