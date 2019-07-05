#TypeORM

.Config file: ormconfig.json

We will use synchronize in false to be sure that the data will be safe:

attribute:	"synchronize": false,

WARNING: If it attribute were true, The database would be dropped and created again. You could lose productive database with that configuration

   "entities": [
      "dist/entity/**/*.js"
   ],
   "migrations": [
      "dist/migration/**/*.js"
   ]
   
Both attributes are pointing to "compiles files" (.js). Remember use TSC before run "typeorc migration".

If you delete a entity, you must delete it in the dist directory and the database. Migrations doesn't delete entities.

How to create a new entity:

First of all you have to create the entity in "src/entity" and extend the class from GenericEntity

Then run the comand

$ tsc

after that, you have to run:

migration generate:

$ typeorm migration:generate -n

then compile again

$ tsc

and finally:

$ typeorm migration:run
