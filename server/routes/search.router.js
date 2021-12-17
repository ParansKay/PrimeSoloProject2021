const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT activity.title, activity.description, tag.name FROM activity
  JOIN activity_tag ON activity.id=activity_tag.activity_id
  JOIN tag ON activity_tag.tag_id=tag.id
  WHERE tag.id=1`;
  pool.query(queryText, req.query.id)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all search results', err);
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
