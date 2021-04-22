//Order to create => Tags , Locations , users , Posts


exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('tags', function(tags) {
        tags.increments('tagid').primary();
        tags.string('tag_name')
    })
    .then(() => {
        return knex.schema
          .createTable('locations', function(locations){
              locations.increments('locationsid').primary();
              locations.string('base_name');
          })
      })
      .then( () => {
          return knex.schema
          .createTable('users', function(users){
              users.increments('usersid').primary();
              users.string('first_name')
              users.string('last_name')
              users.integer('base_id').notNullable()
              users.foreign('base_id').references('locationsid').inTable('locations')
              users.string('email')
              users.string('phone_number')
          })
      })
      .then( () => {
           return knex.schema
          .createTable('posts', function(post){
              post.increments('postsid').primary();
              post.string('post_title')
              post.string('post_body', 10000)
              post.integer('price')
              post.timestamp('created_at').defaultTo(knex.fn.now())
              post.integer('base_id').notNullable()
              post.foreign('base_id').references('locationsid').inTable('locations')
              post.string('image_url')
              post.integer('tag_id').notNullable()
              post.foreign('tag_id').references('tagid').inTable('tags')
              post.integer('user_id').notNullable()
              post.foreign('user_id').references('usersid').inTable('users')
        
          })
      })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("posts")
      .dropTable("users")
      .dropTable("locations")
      .dropTable("tags")
  };
  