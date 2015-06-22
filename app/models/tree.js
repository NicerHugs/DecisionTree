import DS from 'ember-data';

export default DS.Model.extend({
  nodes: DS.hasMany('node'),
  description: DS.attr('string'),
  name: DS.attr('string'),
  noNodes: function() {
    if (this.get('nodes').length > 0) {
      return false;
    } else {
      return true }
  }.property('nodes.@each')
});
