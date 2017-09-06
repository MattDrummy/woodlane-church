import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr('string'),
  verse: DS.attr('string'),
  verse_link: DS.attr('string')
});
