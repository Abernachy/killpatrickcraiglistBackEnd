# killpatrickcraiglistBackEnd
---------------------
note for future me since you keep coming here:
Hey hot stuff, so the easiest way to simplify this stuff below is to create a docker image using a Dockerfile that uses postgres as its base image, but runs the commands below on start.  This way, from an end user perspective, the container can just be pulled from hub and started, no extra magic or sweet stuff required.  Take some time and look into that.  
Stay handsome
---------------------------

Sup ya'll its ya boy, the README file. 

This is the Back End for the Killpatrickcraiglist application we (Elgin , Richard, Steven, Michael) developed.  To get this sucker going, the instructions and requirements are below:

## Requirements:
1.   You need the latest PostGres docker image, so if you have docker installed, just simply pull it ($ docker pull postgres), if you dont have docker, go get and install it.

## Instructions:
### NPM:
1.  Install your npm packages (This will install express/pg/knex/cors/not viruses so dont worry about anything else):  
          $ npm install 

2.  Start the express server.  Your endpoints wont return that sweet tasty data, but we wont let that stop us:    
          $ npm app.js
          
### Docker Set up:
1.  Start your docker postgres container.  We are using the command from the Galvanize school:  
      $  docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432  -v ~/docker/volumes/postgres:/var/lib/postgresql/data  postgres  

2.  Find your container ID and use that to open the container into bash bash.  
        $ docker container ls  
        $ docker exec -it <the container id> bash 

3.  Create the KCL database in your docker bash, and go into it like its your house  
          $ createdb -U postgres KCL   
          $ psql -U postgres KCL 

### Knex:
1.  If you leave the knexfile.js untouched, the instructions below should work, unless you are in the Space Force, in which case, you need to join a real military branch.

2.  Migrate the migrations table to your postGres database (KCL) and then seed them with your children  
      $ npx knex migrate:latest  \
        $ npx knex seed:run   

## Endpoints
Applicable endpoints are:
1.        /ads => retrieves ALL POSTS
2.        /users => retrieves ALL DA USERS
3.        /locations => retrieves..yep, you guessed it, all locations.
4.        /ads/(id #) => retrieves the posts with the ID number
5.        /ads?baseid=x(&tagid=x) => retrieves the ads based on the baseId and/or tagID, if nothing is specified it does the above.

## Closing
That should be it.  If you have any questions, comments, concerns, please don't hestiate to let us know.  Thank you and have a wonderful day.
V/R
The Dodgers Team
