module.exports = function(app) {
  var express = require('express');
  var nodesRouter = express.Router();

  nodesRouter.get('/', function(req, res) {
    res.send({
      'nodes': []
    });
  });

  nodesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  nodesRouter.get('/:id', function(req, res) {
    res.send({
      'nodes': {
        id: req.params.id
      }
    });
  });

  nodesRouter.put('/:id', function(req, res) {
    res.send({
      'nodes': {
        id: req.params.id
      }
    });
  });

  nodesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/nodes', nodesRouter);
};
