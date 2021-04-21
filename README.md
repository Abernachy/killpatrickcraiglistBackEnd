# killpatrickcraiglistBackEnd


Sup ya'll its ya boy, the README file. 

this is the Back End for the Killpatrickcraiglist application we (Elgin , Richard, Steven, Michael).  To get this sucker going, the instructions and requirements are below:

## Requirements:
1.   You need the latest PostGres docker image, so if you have docker installed, just simply pull it ($ docker pull postgres), if you dont have docker, go get and install it.

## Instructions:
### NPM:
1.  Install your npm packages (This will install express/pg/knex/not viruses so dont worry about anything else):  
        **  $npm install **
### Docker Set up:
1.  Start your docker postgres container.  We are using the command from the Galvanize school:  
      **$  docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432  -v ~/docker/volumes/postgres:/var/lib/postgresql/data \ postgres  **

2.  Find your container ID and use that to open the container into bash bash.  
       ** $ docker container ls
        $ docker exec -it <the container id> bash **

3.  Create the KCL database in your docker bash, and go into like its your house  
        **  $ createdb -U postgres KCL 
            $ psql -U postgres KCL **

### Knex:
1.  If you leave the knexfile.js untouched, the instructions below should work, unless you are in the Space Force, in which case, you need to joing a real military branch.

2.  Migrate the migrations table to your postGres database (KCL) and then seed them with your children  
    **  $ npx knex migrate:latest
        $ npx knex seed:run  **


## Closing
That should be it.  If you have any questions, comments, concerns, please don't hestiate to let us know.  Thank you and have a wonderful day.
V/R
The Dodgers Team