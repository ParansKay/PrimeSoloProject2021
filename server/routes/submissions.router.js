const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM activity where "clearance_level" = ${req.user.access_level}`;
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
 * POST route template
 */
//  router.post('/', (req, res) => {
//    //post route code goes here
//   console.log(req.body);
//   // RETURNING "id" will give us back the id of the created movie
//   const insertActivityQuery = `
//   INSERT INTO "activity" ("title", "description", "actors")
//   VALUES ($1, $2, $3)
//   RETURNING "id";`

//   // FIRST QUERY MAKES ACTIVITY
//   pool.query(insertActivityQuery, [req.body.title, req.body.description, req.body.actors])
//   .then(result => {
//     console.log('New activity Id:', result.rows[0].id); //ID IS HERE!
    
//     const createdActivityId = result.rows[0].id

//     // Now handle the genre reference
//     const insertActivityTagQuery = `
//       INSERT INTO "activity_tag" ("activity_id", "tag_id")
//       VALUES  ($1, $2);
//       `
//       // SECOND QUERY ADDS TAG FOR THAT NEW ACTIVITY
//       pool.query(insertActivityTagQuery, [createdActivityId, req.body.tag_id]).then(result => {
//         //Now that both are done, send back success!
//         res.sendStatus(201);
//       }).catch(err => {
//         // catch for second query
//         console.log(err);
//         res.sendStatus(500)
//       })

// // Catch for first query
//   }).catch(err => {
//     console.log(err);
//     res.sendStatus(500)
//   })
// })

module.exports = router;
