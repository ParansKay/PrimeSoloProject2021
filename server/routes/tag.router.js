const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT tag.name, tag.id , activity.title FROM activity
  JOIN activity_tag ON activity.id=activity_tag.activity_id
  JOIN tag ON activity_tag.tag_id=tag.id
  WHERE activity.id=$1`
  console.log( 'req.query.id----->', req.query.id);
  pool.query(queryText, [req.query.id])
    .then( result => {
        console.log( 'TAG RESULTS:------>', result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all tags', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
