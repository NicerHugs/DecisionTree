import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addNode: function() {
      var node = this.store.createRecord('node');
      this.controller.get('model').get('nodes').addObject(node);
    },
    removeNode: function(node) {
      this.controller.get('model').get('nodes').removeObject(node);
    },
    addDecision: function(node) {
      var decision = this.store.createRecord('decision');
      node.get('decisions').addObject(decision);
    },
    removeDecision: function(node, decision) {
      node.get('decisions').removeObject(decision);
    }
  },
  model: function() {
    return this.store.createRecord('tree');
  }
});
