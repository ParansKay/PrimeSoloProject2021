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
//   }





//   const queryText = `SELECT activity.title, activity.description, activity.actors, activity.id, tag.name FROM activity
//   JOIN activity_tag ON activity.id=activity_tag.activity_id
//   JOIN tag ON activity_tag.tag_id=tag.id
//   WHERE tag.id=$1`
//   console.log( 'req.query.id----->', req.query.id);
//   pool.query(queryText, [req.query.id])
//     .then( result => {
//         console.log( 'SEARCH RESULTS:------>', result.rows);
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all search results', err);
//       res.sendStatus(500)
//     })
// });

//     const queryText = `SELECT * FROM activity ORDER BY "title" ASC`;
      
//       pool.query(queryText, [req.query.id])
//         .then( result => {
//         console.log( 'SEARCH RESULTS:------>', result.rows);
//           res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get search results', err);
//       res.sendStatus(500)
//     })
  



/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
