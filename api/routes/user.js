"use strict";

module.exports = (router) => {
  router.route('/user/:user_id')
    .get((req, res, next) => {
      res.json({user_id: req.params.user_id});
    });
};

