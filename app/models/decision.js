import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  node: DS.belongsTo('node', {
    inverse: 'decisions'
  }),
  prev: DS.belongsTo('node'),
  next: DS.belongsTo('node')
});
