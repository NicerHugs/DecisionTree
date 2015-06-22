module.exports = function(app) {
  var express = require('express');
  var decisionsRouter = express.Router();

  decisionsRouter.get('/', function(req, res) {
    res.send({
      'decisions': []
    });
  });

  decisionsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  decisionsRouter.get('/:id', function(req, res) {
    res.send({
      'decisions': {
        id: req.params.id
      }
    });
  });

  decisionsRouter.put('/:id', function(req, res) {
    res.send({
      'decisions': {
        id: req.params.id
      }
    });
  });

  decisionsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/decisions', decisionsRouter);
};
