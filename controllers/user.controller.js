const userStore = require('../stores/user.store');

/**
 * Get function for user
 *
 * @param {Object} req Requester
 * @param {Object} res Response
 * @return {Json}
 */
function index(req, res) {
  res.json(userStore.all());
}

/**
 * Post function for user
 *
 * @param {Object} req Requester
 * @param {Object} res Response
 * @return {Json}
 */
function showByUserName(req, res) {
  res.json(userStore.all().find((u) => u['username'] == req.params.username));
}

module.exports = { index, showByUserName };
