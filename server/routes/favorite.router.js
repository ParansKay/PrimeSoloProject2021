const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
    const queryText = `SELECT activity.title, activity.description, activity.actors, activity.id FROM activity
    JOIN favorite ON favorite.activity_id=activity.id
    JOIN "user" ON "user".id=favorite.user_id
    WHERE "user".id=$1`
      console.log( 'req.query.id----->', [req.query.id]);
      pool.query(queryText, [req.query.id])
        .then( result => {
            console.log( 'FAVORITE RESULTS:------>', result.rows);
          res.send(result.rows);
        })
        .catch(err => {
          console.log('ERROR: Get all favorite results', err);
          res.sendStatus(500)
        })
});
//FAVE ACTIVITY DETAIL GET 
router.get('/single', (req, res) => {
  const queryText = `SELECT * FROM "favorite"
  WHERE "favorite".activity_id=$1 AND favorite.user_id=$2;`
    console.log( 'req.query.id----->', [req.query.activity_id, req.query.user_id]);
    pool.query(queryText, [req.query.activity_id, req.query.user_id])
      .then( result => {
          console.log( 'SINGLE FAVORITE RESULT:------>', result.rows);
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get single favorite results', err);
        res.sendStatus(500)
      })
});
//   }

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log( 'in POST ROUTE with:', req.body);
    console.log( 'req.body.user_id:', req.body.user_id, 'req.body.activity_id:', req.body.activity_id)
    // POST route code here
    const queryTextFave = `INSERT INTO "favorite" ("user_id", "activity_id")
    VALUES ($1, $2)
    RETURNING "id";`
    pool.query(queryTextFave, [req.body.user_id, req.body.activity_id])
    .then(result => {
      console.log('New favorite activity Id:', result.rows[0].id);
      const createdFaveId = result.rows[0].id

      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all favorite results', err);
      res.sendStatus(500)
    })
});

router.delete('/', (req, res) => {
    console.log( 'in DELETE ROUTE with:', req.body);
    console.log( 'req.body.user_id:', req.body.user_id, 'req.body.activity_id:', req.body.activity_id)
    // DELETE route code here
    const queryTextFave = `DELETE FROM "favorite"
    WHERE "user_id"=$1 and "activity_id"=$2;`
    pool.query(queryTextFave, [req.body.user_id, req.body.activity_id])
    .then(result => {
      console.log('deleted activity Id');
      res.sendStatus(200)
    })
    .catch(err => {
      console.log('ERROR: Get all favorite results', err);
      res.sendStatus(500)
    })
});

module.exports = router;