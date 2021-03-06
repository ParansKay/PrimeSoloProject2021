const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM activity where "clearance_level" = 0`;
  pool.query(queryText, req.query.id)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all activities', err);
      res.sendStatus(500)
    })
});


/**
 * DELETE ROUTE
 */
 router.delete('/', (req, res) => {
  // DELETE route code here
  console.log( 'in DELETE ROUTE with:', req.body.activity_id);
  const queryTextDelete = `DELETE FROM "activity"
    WHERE "id"=$1;`
    pool.query(queryTextDelete, [req.body.activity_id])
    .then( result => {
      console.log('deleted activity Id');
      // res.sendStatus(200)
    })
    .catch(err => {
      console.log('ERROR: deleting activity', err);
      res.sendStatus(500)
    })
});




// CLEARANCE PUT ROUTE 
router.put('/', (req, res) => {
  // GET route code here
  console.log( 'req.query is: ---->', req.query);
  const updateActivityClearanceQuery = 
  `UPDATE "activity"
  SET "clearance_level"= 0
  WHERE "activity".id=${req.query.id}`;
  pool.query(updateActivityClearanceQuery, req.query.clearence_level)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: could not update activity clearance level', err);
      res.sendStatus(500)
    })
});

//ACTIVITY EDIT PUT ROUTE
router.put('/edit', (req, res) => {
  // GET route code here
  const updateActivity = 
  `UPDATE "activity"
  SET "title"=$1, "description"=$2, "actors"=$3
  WHERE "activity".id=${req.query.id}`;
  pool.query(updateActivity, [req.body.title, req.body.description, req.body.actors])
    .then( result => {
      res.send(result.rows);

      // Now handle the tag update reference
      const updateTagQuery = 
      `UPDATE "activity_tag"
      SET "tag_id"=$1
      WHERE "activity_tag".activity_id=${req.query.id}`;
      pool.query(updateTagQuery, [req.body.tag_id]).then(result => {
        //Now that both are done, send back success!
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

    // Catch for first query
     }).catch(err => {
      console.log('ERROR: could not update activity', err);
      res.sendStatus(500)
    })
});



/* 
 * POST route template
 */
 router.post('/', (req, res) => {
   //post route code goes here
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertActivityQuery = `
  INSERT INTO "activity" ("title", "description", "actors")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES ACTIVITY
  pool.query(insertActivityQuery, [req.body.title, req.body.description, req.body.actors])
  .then(result => {
    console.log('New activity Id:', result.rows[0].id); //ID IS HERE!
    
    const createdActivityId = result.rows[0].id

    // Now handle the genre reference
    const insertActivityTagQuery = `
      INSERT INTO "activity_tag" ("activity_id", "tag_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS TAG FOR THAT NEW ACTIVITY
      pool.query(insertActivityTagQuery, [createdActivityId, req.body.tag_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;
